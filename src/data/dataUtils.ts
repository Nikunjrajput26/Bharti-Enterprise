// src/utils/dataUtils.ts
import * as path from "path";
import * as fs from "fs";

export interface Product {
  product_name: string;
  page_url?: string;
  image_url?: string;
  [k: string]: unknown;
}

export interface CatalogNode {
  parent_category: string;
  category: string;
  brand?: string;
  products: Product[];
  [k: string]: unknown;
}

export interface MenuCategory {
  parent: string;
  category: string;
  slug: string;
  count: number;
}

export interface MenuTree {
  parents: string[];
  categoriesByParent: Record<string, MenuCategory[]>;
}

export function slugify(s: string) {
  return s
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isCatalogNode(x: unknown): x is CatalogNode {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o["parent_category"] === "string" &&
    typeof o["category"] === "string" &&
    Array.isArray(o["products"])
  );
}

function normalizeToArray(
  input: CatalogNode | CatalogNode[] | unknown
): CatalogNode[] {
  if (Array.isArray(input)) return input.filter(isCatalogNode);
  if (isCatalogNode(input)) return [input];
  throw new Error("Input is not a CatalogNode or CatalogNode[]");
}

export function readJsonSync(filePath: string): unknown {
  const resolved = path.resolve(filePath);
  const raw = fs.readFileSync(resolved, "utf-8");
  return JSON.parse(raw);
}

export function loadCatalog(jsonOrPath: string | CatalogNode | CatalogNode[]) {
  if (typeof jsonOrPath === "string") {
    const data = readJsonSync(jsonOrPath);
    return normalizeToArray(data);
  }
  return normalizeToArray(jsonOrPath);
}

export function getParents(catalog: CatalogNode[] | CatalogNode): string[] {
  const list = normalizeToArray(catalog);
  return Array.from(new Set(list.map((n) => n.parent_category))).sort();
}

export function getCategories(options: {
  catalog: CatalogNode[] | CatalogNode;
  parent?: string;
}): string[] {
  const list = normalizeToArray(options.catalog);
  const filtered = options.parent
    ? list.filter((n) => n.parent_category === options.parent)
    : list;
  return Array.from(new Set(filtered.map((n) => n.category))).sort();
}

export function buildMenuTree(catalog: CatalogNode[] | CatalogNode): MenuTree {
  const list = normalizeToArray(catalog);
  const parents = Array.from(
    new Set(list.map((n) => n.parent_category))
  ).sort();

  const categoriesByParent: Record<string, MenuCategory[]> = {};
  for (const parent of parents) {
    const nodes = list.filter((n) => n.parent_category === parent);
    const seen = new Map<string, number>();
    for (const node of nodes) {
      const key = node.category;
      const current = seen.get(key) ?? 0;
      seen.set(key, current + (Array.isArray(node.products) ? node.products.length : 0));
    }
    categoriesByParent[parent] = Array.from(seen.entries())
      .map(([category, count]) => ({
        parent,
        category,
        count,
        slug: `${slugify(parent)}__${slugify(category)}`,
      }))
      .sort((a, b) => a.category.localeCompare(b.category));
  }

  return { parents, categoriesByParent };
}

export function getProductsByCategory(options: {
  catalog: CatalogNode[] | CatalogNode;
  category: string;
  parent?: string;
}): Product[] {
  const { category, parent } = options;
  const list = normalizeToArray(options.catalog);
  return list
    .filter((n) => {
      const okCat = n.category === category;
      const okParent = parent ? n.parent_category === parent : true;
      return okCat && okParent;
    })
    .flatMap((n) => n.products || []);
}

// This is for the Prodduct Page 
export function getProductBySlugs(options: {
  catalog: CatalogNode[] | CatalogNode;
  categorySlug: string;
  productSlug: string;
}): { node?: CatalogNode; product?: Product } {
  const list = normalizeToArray(options.catalog);
  const [parentPart, categoryPart] = options.categorySlug.split(/__/, 2);

  // try exact slug match first (we stored slug on menu entries earlier)
  for (const n of list) {
    const s = `${slugify(n.parent_category)}__${slugify(n.category)}`;
    if (s === options.categorySlug) {
      const prod = (n.products || []).find(
        (p) => slugify(String(p.product_name || "")) === options.productSlug
      );
      if (prod) return { node: n, product: prod };
    }
  }

  // fallback: try matching by parent/category heuristics if split failed
  if (parentPart && categoryPart) {
    const node = list.find(
      (n) =>
        slugify(n.parent_category) === parentPart &&
        slugify(n.category) === categoryPart
    );
    if (node) {
      const prod = (node.products || []).find(
        (p) => slugify(String(p.product_name || "")) === options.productSlug
      );
      if (prod) return { node, product: prod };
    }
  }

  // last resort: search across all products for productSlug
  for (const n of list) {
    const prod = (n.products || []).find(
      (p) => slugify(String(p.product_name || "")) === options.productSlug
    );
    if (prod) return { node: n, product: prod };
  }

  return { node: undefined, product: undefined };
}
