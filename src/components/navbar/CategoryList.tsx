// src/components/CategoryList.tsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import productsData from "../../data/data.json";
import {
  buildMenuTree,
  getProductsByCategory,
  loadCatalog,
  slugify,
  type CatalogNode,
  type Product,
} from "../../data/dataUtils";

interface CategoryListProps {
  onLinkClick?: () => void;
  // optionally show only one parent
  parentFilter?: string;
}

// if your tsconfig supports resolveJsonModule, productsData will be typed as 'any'
// loadCatalog will normalize it to CatalogNode[]
const catalog = loadCatalog(
  productsData as unknown as CatalogNode | CatalogNode[]
);

export default function CategoryList({
  onLinkClick,
  parentFilter,
}: CategoryListProps) {
  const menu = useMemo(() => buildMenuTree(catalog), [catalog]);

  const parentsToRender = parentFilter
    ? menu.parents.filter((p) => p === parentFilter)
    : menu.parents;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl my-2 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {parentsToRender.map((parent) => (
              <div key={parent} className="relative">
                <p
                  className="text-sm/6 font-semibold text-gray-800"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  <Link
                    to={`/parent/${slugify(parent)}`}
                    className="hover:text-red-600 transition-colors"
                    onClick={onLinkClick}
                  >
                    {parent}
                  </Link>
                </p>

                {menu.categoriesByParent[parent].map((cat) => {
                  const products: Product[] = getProductsByCategory({
                    catalog,
                    parent,
                    category: cat.category,
                  });

                  return (
                    <div key={cat.category} className="mt-1">
                      <p
                        className="text-sm/6 font-semibold text-gray-800"
                        style={{ fontFamily: "Oswald, sans-serif" }}
                      >
                        <Link
                          to={`/category/${slugify(parent)}/${slugify(
                            cat.category
                          )}`}
                          className="mt-1 text-xs/5 text-gray-500 hover:text-[#E03131] transition-colors"
                          style={{ fontFamily: "Inter, sans-serif" }}
                          onClick={onLinkClick}
                        >
                          {cat.category}{" "}
                          <span className="text-xs text-gray-400">
                            ({cat.count})
                          </span>
                        </Link>
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
