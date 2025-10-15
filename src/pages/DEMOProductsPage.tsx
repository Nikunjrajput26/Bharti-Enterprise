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
import { CarouselDApiDemo } from "@/components/productDetails/ProductImagesCarousel";
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

function normalizeToArray(
  input: CatalogNode | CatalogNode[]
): CatalogNode[] {
  return Array.isArray(input) ? input : [input];
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

  // Read route params - now expecting parentCategoryName and optional categoryName
  const params = useParams<{ parentCategoryName?: string; categoryName?: string }>();
  const parentCategorySlug = params.parentCategoryName ?? "";
  const categorySlug = params.categoryName ?? "";

  // Find matching category node and products
  const matched = useMemo(() => {
    if (productParam) {
      // If product is passed as prop, find its node in catalog
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

    if (!parentCategorySlug) {
      return {
        node: undefined as CatalogNode | undefined,
        products: [] as Product[],
        isCategory: false,
        isParentOnly: false,
      };
    }

    const catalogArray = normalizeToArray(catalog);

    // If only parent category slug is provided (no category slug)
    if (!categorySlug) {
      // Get all products from all categories under this parent
      const matchingNodes = catalogArray.filter((n) => 
        slugify(n.parent_category) === parentCategorySlug
      );

      const allProducts = matchingNodes.flatMap((n) => n.products || []);

      return {
        node: matchingNodes[0], // Use first node for parent category name
        products: allProducts,
        isCategory: true,
        isParentOnly: true,
      };
    }

    // Both parent and category slugs provided
    // Try to match by slugs
    const matchedNode = catalogArray.find((n) => {
      const parentMatch = slugify(n.parent_category) === parentCategorySlug;
      const categoryMatch = slugify(n.category) === categorySlug;
      return parentMatch && categoryMatch;
    });

    if (matchedNode) {
      return {
        node: matchedNode,
        products: matchedNode.products || [],
        isCategory: true,
        isParentOnly: false,
      };
    }

    // If no exact match, try to get products by category name
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
      <AppSidebar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-30">
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
                    ? `${parentCategorySlug.replace(/-/g, " ")} / ${categorySlug.replace(/-/g, " ")}`
                    : parentCategorySlug
                    ? parentCategorySlug.replace(/-/g, " ")
                    : "Products"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 mt-4">
          {isCategory && products.length > 0 ? (
            <div>
              {/* Category Header */}
              <div className="mb-6">
                <h1
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {isParentOnly 
                    ? (node?.parent_category || parentCategorySlug.replace(/-/g, " "))
                    : (node?.category || categorySlug.replace(/-/g, " "))}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {isParentOnly 
                    ? `All products in ${node?.parent_category || parentCategorySlug.replace(/-/g, " ")}`
                    : `${node?.parent_category || parentCategorySlug.replace(/-/g, " ")} Category`}
                  {" • "}
                  {products.length} Product{products.length !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Dialog key={product.product_name + index}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        {/* Product Image */}
                        <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                          {(product as any).image_url ? (
                            <img
                              src={(product as any).image_url}
                              alt={product.product_name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

                        {/* Product Info */}
                        <div className="p-4">
                          <h3
                            className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]"
                            style={{ fontFamily: "Oswald, sans-serif" }}
                          >
                            {product.product_name}
                          </h3>
                          
                          {typeof product.description === "string" && product.description.trim() && (
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                              {product.description}
                            </p>
                          )}

                          {/* Product Metadata */}
                          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                            {(product as any).brand && (
                              <span className="bg-gray-100 px-2 py-1 rounded">
                                {(product as any).brand}
                              </span>
                            )}
                            <span className="text-blue-600 font-medium">
                              View Details →
                            </span>
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
                          {product.product_name}
                        </DialogTitle>
                        <DialogDescription className="text-sm">
                          {isParentOnly 
                            ? node?.parent_category
                            : `${node?.parent_category} / ${node?.category}`}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto px-6 pb-6">
                        {/* Left Column - Image */}
                        <div className="flex justify-center items-start">
                          <div className="w-full max-w-md">
                            <CarouselDApiDemo />
                          </div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="space-y-6">
                          {/* Description */}
                          <section>
                            <h3
                              className="text-lg font-semibold mb-2"
                              style={{ fontFamily: "Oswald, sans-serif" }}
                            >
                              Description
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {typeof product.description === "string" &&
                              product.description.trim() !== ""
                                ? product.description
                                : "No description available."}
                            </p>
                          </section>

                          {/* Technical Data */}
                          <section>
                            <h3
                              className="text-lg font-semibold mb-3"
                              style={{ fontFamily: "Oswald, sans-serif" }}
                            >
                              Technical Data
                            </h3>
                            <ul className="space-y-2 text-sm">
                              <li className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-muted-foreground">Brand:</span>
                                <span className="font-medium">
                                  {(product as any).brand ?? node?.brand ?? "—"}
                                </span>
                              </li>
                              <li className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-muted-foreground">Category:</span>
                                <span className="font-medium">
                                  {isParentOnly 
                                    ? node?.parent_category
                                    : `${node?.parent_category} / ${node?.category}`}
                                </span>
                              </li>
                              <li className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-muted-foreground">Image:</span>
                                <span className="font-medium">
                                  {(product as any).image_url ? "Available" : "—"}
                                </span>
                              </li>
                              {(product as any).page_url && (
                                <li className="flex justify-between py-2 border-b border-gray-100">
                                  <span className="text-muted-foreground">Specification:</span>
                                  <a
                                    href={(product as any).page_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 hover:underline font-medium"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    View Document →
                                  </a>
                                </li>
                              )}
                            </ul>
                          </section>

                          {/* Product Properties */}
                          {Object.keys(product).length > 0 && (
                            <section>
                              <h3
                                className="text-lg font-semibold mb-3"
                                style={{ fontFamily: "Oswald, sans-serif" }}
                              >
                                All Properties
                              </h3>
                              <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto max-h-96">
                                <pre className="whitespace-pre-wrap text-xs font-mono text-gray-700">
                                  {JSON.stringify(product, null, 2)}
                                </pre>
                              </div>
                            </section>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
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