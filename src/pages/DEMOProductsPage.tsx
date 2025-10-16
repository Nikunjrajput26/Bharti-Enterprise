import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppSidebar } from "@/components/DEMOProduct/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Footer } from "@/components/footer/Footer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  type CatalogNode,
  type Product,
  getProductsByCategory,
  slugify,
} from "../data/dataUtils";

function normalizeToArray(input: CatalogNode | CatalogNode[]): CatalogNode[] {
  return Array.isArray(input) ? input : [input];
}

function prettyKey(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function isPlainObject(v: any) {
  return v && typeof v === "object" && !Array.isArray(v);
}

function DetailValue({ value }: { value: any }) {
  // returns JSX rendering for primitives, arrays and objects in a readable form
  if (value === null || value === undefined) return <span>—</span>;
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return <span>{String(value)}</span>;
  }

  if (Array.isArray(value)) {
    // array of primitives or objects
    return (
      <ul className="list-disc pl-5 space-y-1">
        {value.map((item, i) => (
          <li key={i} className="text-sm">
            {isPlainObject(item) ? (
              <ObjectBreakdown obj={item} />
            ) : (
              String(item)
            )}
          </li>
        ))}
      </ul>
    );
  }

  if (isPlainObject(value)) {
    return <ObjectBreakdown obj={value} />;
  }

  return <span>{String(value)}</span>;
}

function ObjectBreakdown({ obj }: { obj: Record<string, any> }) {
  const entries = Object.entries(obj);
  // If object is small and mostly primitive values, render inline pairs
  const simple = entries.every(
    ([, v]) => v == null || ["string", "number", "boolean"].includes(typeof v)
  );

  if (simple) {
    return (
      <div className="text-sm">
        {entries.map(([k, v], i) => (
          <div key={k} className="flex gap-2">
            <span className="text-muted-foreground">{prettyKey(k)}:</span>
            <span className="font-medium">{v == null ? "—" : String(v)}</span>
          </div>
        ))}
      </div>
    );
  }

  // complex object: render a bordered list with nested values
  return (
    <div className="border border-gray-100 rounded p-2 bg-gray-50">
      {entries.map(([k, v]) => (
        <div key={k} className="mb-2">
          <div className="text-xs text-muted-foreground">{prettyKey(k)}</div>
          <div className="text-sm font-medium">
            <DetailValue value={v} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DEMOProductsPage({
  catalog,
  product: productParam,
}: {
  catalog: CatalogNode | CatalogNode[];
  product?: Product;
}) {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  const params = useParams<{
    parentCategoryName?: string;
    categoryName?: string;
  }>();
  const parentCategorySlug = params.parentCategoryName ?? "";
  const categorySlug = params.categoryName ?? "";

  const matched = useMemo(() => {
    if (productParam) {
      let node: CatalogNode | undefined;
      const catalogArray = normalizeToArray(catalog);
      node = catalogArray.find((n) =>
        n.products?.some((p) => p.product_name === productParam.product_name)
      );
      return {
        node,
        products: node?.products || [],
        isCategory: false,
        isParentOnly: false,
      };
    }

    if (!parentCategorySlug)
      return {
        node: undefined as CatalogNode | undefined,
        products: [] as Product[],
        isCategory: false,
        isParentOnly: false,
      };

    const catalogArray = normalizeToArray(catalog);

    if (!categorySlug) {
      const matchingNodes = catalogArray.filter(
        (n) => slugify(n.parent_category) === parentCategorySlug
      );
      const allProducts = matchingNodes.flatMap((n) => n.products || []);
      return {
        node: matchingNodes[0],
        products: allProducts,
        isCategory: true,
        isParentOnly: true,
      };
    }

    const matchedNode = catalogArray.find(
      (n) =>
        slugify(n.parent_category) === parentCategorySlug &&
        slugify(n.category) === categorySlug
    );
    if (matchedNode)
      return {
        node: matchedNode,
        products: matchedNode.products || [],
        isCategory: true,
        isParentOnly: false,
      };

    const categoryProducts = getProductsByCategory({
      catalog,
      category: categorySlug.replace(/-/g, " "),
      parent: parentCategorySlug.replace(/-/g, " "),
    });
    return {
      node: undefined,
      products: categoryProducts,
      isCategory: true,
      isParentOnly: false,
    };
  }, [catalog, parentCategorySlug, categorySlug, productParam]);

  const { node, products, isCategory, isParentOnly } = matched;

  return (
    <SidebarProvider style={{ fontFamily: "Inter, sans-serif" }}>
      {/* <AppSidebar
        catalog={catalog}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      /> */}
      <SidebarInset>
        {/* <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-30">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Wire & Cable</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {isParentOnly && node
                    ? node.parent_category
                    : node
                    ? `${node.parent_category} / ${node.category}`
                    : parentCategorySlug && categorySlug
                    ? `${parentCategorySlug.replace(
                        /-/g,
                        " "
                      )} / ${categorySlug.replace(/-/g, " ")}`
                    : parentCategorySlug
                    ? parentCategorySlug.replace(/-/g, " ")
                    : "Products"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header> */}

        <div className="flex flex-1 flex-col gap-4 p-4 mt-4">
          {isCategory && products.length > 0 ? (
            <div>
              <div className="mb-6">
                <h1
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {isParentOnly
                    ? node?.parent_category ||
                      parentCategorySlug.replace(/-/g, " ")
                    : node?.category || categorySlug.replace(/-/g, " ")}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {isParentOnly
                    ? `All products in ${
                        node?.parent_category ||
                        parentCategorySlug.replace(/-/g, " ")
                      }`
                    : `${
                        node?.parent_category ||
                        parentCategorySlug.replace(/-/g, " ")
                      } Category`}{" "}
                  {" • "}
                  {products.length} Product{products.length !== 1 ? "s" : ""}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => {
                  const p: any = product as any;
                  const images: string[] = [];
                  if (p.image_url) images.push(p.image_url);
                  if (p.cross_section_url) images.push(p.cross_section_url);

                  const knownKeys = new Set([
                    "product_name",
                    "title",
                    "description",
                    "application",
                    "specs",
                    "cable_construction",
                    "properties",
                    "image_url",
                    "cross_section_url",
                    "cross_section",
                    "page_url",
                    "brand",
                    "category",
                  ]);
                  const genericKeys = Object.keys(p).filter(
                    (k) => !knownKeys.has(k)
                  );

                  return (
                    <Dialog key={p.product_name + index}>
                      <DialogTrigger asChild>
                        <div
                          className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl relative"
                          aria-hidden="false"
                        >
                          <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                            {p.image_url ? (
                              <img
                                src={p.image_url}
                                alt={p.product_name}
                                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="text-gray-300">
                                <svg
                                  className="w-16 h-16"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>

                          <div className="p-4">
                            <h3
                              className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem] transition-colors duration-200"
                              style={{ fontFamily: "Oswald, sans-serif" }}
                            >
                              {/* title turns logo-red on hover */}
                              <span className="group-hover:text-[#E03131]">
                                {p.product_name}
                              </span>
                            </h3>

                            {typeof p.description === "string" &&
                              p.description.trim() && (
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                  {p.description}
                                </p>
                              )}

                            <div className="flex items-center justify-between gap-2 mb-3">
                              

                              {/* Buttons group (View + Enquiry) */}
                              <div className="flex items-center gap-2">
                                {/* View button (keeps default behavior of card click opening dialog) */}
                                <button
                                  type="button"
                                  className="px-3 py-1.5 text-xs font-semibold bg-gray-100 hover:bg-gray-200 rounded transition-transform duration-200"
                                  aria-label={`View ${p.product_name}`}
                                >
                                  View
                                </button>

                                {/* Enquiry button - stops dialog open and opens WhatsApp with message */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.nativeEvent.stopImmediatePropagation?.();

                                    const productName = String(
                                      p.product_name ?? ""
                                    ).trim();
                                    const categoryName = String(
                                      p.category ??
                                        p.category_name ??
                                        p.parent_category ??
                                        p.parent ??
                                        ""
                                    ).trim();

                                    const messageParts: string[] = [];
                                    if (categoryName)
                                      messageParts.push(categoryName);
                                    if (productName)
                                      messageParts.push(productName);

                                    const message = messageParts.length
                                      ? `Hi, I'm interested in ${messageParts.join(
                                          " — "
                                        )}. Please share details.`
                                      : `Hi, I'm interested in this product. Please share details.`;

                                    const phone = "911234567890"; // replace with your number (country code + number, no +)
                                    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
                                      message
                                    )}`;

                                    window.open(
                                      waUrl,
                                      "_blank",
                                      "noopener,noreferrer"
                                    );
                                  }}
                                  className="px-3 py-1.5 text-xs font-semibold bg-[#E03131] text-white rounded transform transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
                                  aria-label={`Enquire about ${p.product_name}`}
                                >
                                  Enquiry
                                </button>
                              </div>
                            </div>

                            {/* small metadata area (optional) */}
                            <div className="text-xs text-muted-foreground">
                              {p.sku && (
                                <span className="mr-2">SKU: {p.sku}</span>
                              )}
                              {p.availability && <span>{p.availability}</span>}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="w-[95vw] md:w-[90vw] max-w-6xl h-[85vh] md:h-[90vh] flex flex-col p-0">
                        <DialogHeader className="p-6 pb-4">
                          <DialogTitle
                            className="text-xl md:text-2xl font-semibold"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                          >
                            {p.title || p.product_name}
                          </DialogTitle>
                          <DialogDescription className="text-sm">
                            {isParentOnly
                              ? node?.parent_category
                              : `${node?.parent_category} / ${node?.category}`}
                          </DialogDescription>
                        </DialogHeader>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto px-6 pb-6">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-full max-w-md bg-white rounded-md shadow-sm overflow-hidden">
                              {images.length > 0 ? (
                                <div>
                                  <img
                                    src={images[0]}
                                    alt={p.product_name}
                                    className="w-full h-64 object-contain bg-gray-50"
                                  />
                                  {images
                                    .slice(1)
                                    .map((src: string, i: number) => (
                                      <div
                                        key={i}
                                        className="p-3 border-t border-gray-100 bg-gray-50"
                                      >
                                        <img
                                          src={src}
                                          alt={`extra-${i}`}
                                          className="w-full h-28 object-contain"
                                        />
                                      </div>
                                    ))}
                                </div>
                              ) : (
                                <div className="w-full h-64 flex items-center justify-center text-gray-300">
                                  No image available
                                </div>
                              )}
                            </div>

                            {/*    <div className="w-full max-w-md flex gap-3">
                              {p.page_url && (
                                <a
                                  href={p.page_url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex-1 text-center py-2 rounded-md border border-gray-200 hover:shadow-sm"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  View Product Page
                                </a>
                              )}
                              {p.cross_section_url && (
                                <a
                                  href={p.cross_section_url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex-1 text-center py-2 rounded-md border border-gray-200 hover:shadow-sm"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Cross Section SVG
                                </a>
                              )}
                            </div> */}
                          </div>

                          <div className="space-y-6">
                            <section>
                              <h3
                                className="text-lg font-semibold mb-2"
                                style={{ fontFamily: "Oswald, sans-serif" }}
                              >
                                Description
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {typeof p.description === "string" &&
                                p.description.trim() !== ""
                                  ? p.description
                                  : "No description available."}
                              </p>
                            </section>

                            {p.application && (
                              <section>
                                <h3
                                  className="text-lg font-semibold mb-2"
                                  style={{ fontFamily: "Oswald, sans-serif" }}
                                >
                                  Application
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {p.application}
                                </p>
                              </section>
                            )}

                            {p.specs && Object.keys(p.specs).length > 0 && (
                              <section>
                                <h3
                                  className="text-lg font-semibold mb-3"
                                  style={{ fontFamily: "Oswald, sans-serif" }}
                                >
                                  Specifications
                                </h3>
                                <div className="rounded-md border border-gray-100 overflow-hidden">
                                  <table className="w-full text-sm">
                                    <tbody>
                                      {Object.entries(p.specs).map(([k, v]) => (
                                        <tr
                                          key={k}
                                          className="border-b last:border-b-0"
                                        >
                                          <td className="px-4 py-2 text-muted-foreground w-1/2">
                                            {prettyKey(k)}
                                          </td>
                                          <td className="px-4 py-2 font-medium">
                                            <DetailValue value={v} />
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </section>
                            )}

                            {p.cable_construction &&
                              Object.keys(p.cable_construction).length > 0 && (
                                <section>
                                  <h3
                                    className="text-lg font-semibold mb-2"
                                    style={{ fontFamily: "Oswald, sans-serif" }}
                                  >
                                    Cable Construction
                                  </h3>
                                  <div className="text-sm space-y-2">
                                    {Object.entries(p.cable_construction).map(
                                      ([k, v]) => (
                                        <div key={k} className="flex flex-col">
                                          <div className="text-muted-foreground">
                                            {prettyKey(k)}
                                          </div>
                                          <div className="font-medium">
                                            <DetailValue value={v} />
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </section>
                              )}

                            {Array.isArray(p.properties) &&
                              p.properties.length > 0 && (
                                <section>
                                  <h3
                                    className="text-lg font-semibold mb-2"
                                    style={{ fontFamily: "Oswald, sans-serif" }}
                                  >
                                    Key Properties
                                  </h3>
                                  <ul className="text-sm space-y-1 list-disc pl-5">
                                    {p.properties.map(
                                      (prop: any, i: number) => (
                                        <li key={i}>
                                          {isPlainObject(prop) ? (
                                            <ObjectBreakdown obj={prop} />
                                          ) : (
                                            String(prop)
                                          )}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </section>
                              )}

                            {genericKeys.length > 0 && (
                              <section>
                                <h3
                                  className="text-lg font-semibold mb-3"
                                  style={{ fontFamily: "Oswald, sans-serif" }}
                                >
                                  Details
                                </h3>
                                <div className="space-y-3">
                                  {genericKeys.map((k) => (
                                    <div
                                      key={k}
                                      className="border border-gray-100 rounded p-3 bg-white"
                                    >
                                      <div className="text-sm text-muted-foreground mb-1">
                                        {prettyKey(k)}
                                      </div>
                                      <div className="text-sm font-medium">
                                        <DetailValue value={p[k]} />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </section>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </div>
          ) : isCategory && products.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8">
              <div className="text-muted-foreground max-w-md">
                <svg
                  className="w-20 h-20 mx-auto mb-4 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <h2
                  className="text-2xl font-semibold mb-2 text-gray-700"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  No Products Found
                </h2>
                <p className="text-sm text-gray-500">
                  This category doesn't have any products yet.
                </p>
                {parentCategorySlug && (
                  <p className="text-xs text-gray-400 mt-4">
                    {categorySlug
                      ? `Category: ${parentCategorySlug} / ${categorySlug}`
                      : `Parent Category: ${parentCategorySlug}`}
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
