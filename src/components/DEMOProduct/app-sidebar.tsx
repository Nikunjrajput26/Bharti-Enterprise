import * as React from "react";
import { SearchForm } from "@/components/DEMOProduct/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  buildMenuTree,
  getProductsByCategory,
  slugify,
  type CatalogNode,
  type Product,
} from "../../data/dataUtils"; // adjust path if needed

const filterData = {
  navMain: [
    {
      title: "Category",
      items: [
        { title: "Power Cables", value: "power" },
        { title: "Control Cables", value: "control" },
        { title: "Instrumentation Cables", value: "instrumentation" },
        { title: "Flexible Cables", value: "flexible" },
        { title: "Coaxial Cables", value: "coaxial" },
      ],
    },
    {
      title: "Material",
      items: [
        { title: "Copper", value: "copper" },
        { title: "Aluminium", value: "aluminium" },
      ],
    },
    {
      title: "Insulation Type",
      items: [
        { title: "PVC", value: "pvc" },
        { title: "XLPE", value: "xlpe" },
        { title: "Rubber", value: "rubber" },
      ],
    },
    {
      title: "Voltage Rating",
      items: [
        { title: "Low Voltage (LV)", value: "lv" },
        { title: "Medium Voltage (MV)", value: "mv" },
        { title: "High Voltage (HV)", value: "hv" },
      ],
    },
  ],
};

export function AppSidebar({
  catalog,
  selectedFilters,
  setSelectedFilters,
  ...props
}: {
  catalog: CatalogNode | CatalogNode[]; // pass catalog into sidebar
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<Record<string, string[]>>
  >;
} & React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // UI state for expanding parents and categories
  const [expandedParents, setExpandedParents] = React.useState<Record<string, boolean>>({});
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({});

  const menu = React.useMemo(() => buildMenuTree(catalog), [catalog]);

  const toggleParent = (parent: string) =>
    setExpandedParents((s) => ({ ...s, [parent]: !s[parent] }));

  const toggleCategory = (catSlug: string) =>
    setExpandedCategories((s) => ({ ...s, [catSlug]: !s[catSlug] }));

  const handleCheckboxChange = (groupTitle: string, value: string) => {
    setSelectedFilters((prev: Record<string, string[]>) => {
      const groupValues = prev[groupTitle] || [];
      if (groupValues.includes(value)) {
        return {
          ...prev,
          [groupTitle]: groupValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [groupTitle]: [...groupValues, value],
        };
      }
    });
  };

  return (
    <Sidebar
      className={`mt-24 transition-all duration-300 bg-amber-400 shadow-2xl ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      {...props}
    >
      <SidebarHeader className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCollapsed((v) => !v)}
            aria-label="Toggle sidebar"
            className="px-2 py-1 rounded bg-white/20 hover:bg-white/30"
          >
            {isCollapsed ? "▸" : "◂"}
          </button>
          {!isCollapsed && <span className="font-semibold">Filters</span>}
        </div>
      </SidebarHeader>

      {!isCollapsed && (
        <SidebarContent>
          {/* Search at top */}
          <div className="px-2 mb-3">
            <SearchForm />
          </div>

          {/* --------- UPDATED: Product Categories (parent -> category -> products) --------- */}
          <SidebarGroup>
            <SidebarGroupLabel>Product Categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menu.parents.map((parent) => (
                  <SidebarMenuItem key={parent}>
                    <div>
                      <button
                        onClick={() => toggleParent(parent)}
                        className="w-full text-left flex items-center justify-between px-2 py-1"
                      >
                        <span className="font-medium">{parent}</span>
                        <span className="text-xs text-gray-600">
                          {menu.categoriesByParent[parent]?.length ?? 0}
                        </span>
                      </button>

                      {/* categories */}
                      {expandedParents[parent] &&
                        menu.categoriesByParent[parent]?.map((cat) => {
                          // products for this category
                          const products: Product[] = getProductsByCategory({
                            catalog,
                            parent,
                            category: cat.category,
                          });

                          // cat.slug is already slugified parent__category
                          const catSlug = cat.slug;

                          return (
                            <div key={cat.category} className="pl-4">
                              <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer w-full">
                                  <input
                                    type="checkbox"
                                    checked={
                                      selectedFilters["Category"]?.includes(catSlug) ||
                                      false
                                    }
                                    onChange={() =>
                                      handleCheckboxChange("Category", catSlug)
                                    }
                                    className="form-checkbox text-red-600"
                                  />
                                  <span className="text-sm">{cat.category}</span>
                                  <span className="text-xs text-gray-500 ml-2">({cat.count})</span>
                                </label>

                                <button
                                  onClick={() => toggleCategory(catSlug)}
                                  className="text-xs text-gray-700 ml-2 px-2"
                                  aria-label={`Toggle products for ${cat.category}`}
                                >
                                  {expandedCategories[catSlug] ? "–" : "+"}
                                </button>
                              </div>

                              {/* products under category */}
                              {expandedCategories[catSlug] && (
                                <div className="pl-3 py-1">
                                  {products.length === 0 && (
                                    <div className="text-xs text-gray-500 py-1">
                                      No products
                                    </div>
                                  )}
                                  {products.map((p) => {
                                    const productSlug = slugify(
                                      String(p.product_name || "")
                                    );
                                    return (
                                      <div key={productSlug} className="py-1">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                          <input
                                            type="checkbox"
                                            checked={
                                              selectedFilters["Product"]?.includes(
                                                productSlug
                                              ) || false
                                            }
                                            onChange={() =>
                                              handleCheckboxChange(
                                                "Product",
                                                productSlug
                                              )
                                            }
                                            className="form-checkbox text-red-600"
                                          />
                                          <span className="text-xs">
                                            {p.product_name}
                                          </span>
                                        </label>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* --------- end updated block --------- */}

          {/* Static filter sections (keeps existing behavior) */}
          {filterData.navMain.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.value}>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={
                            selectedFilters[group.title]?.includes(item.value) ||
                            false
                          }
                          onChange={() =>
                            handleCheckboxChange(group.title, item.value)
                          }
                          className="form-checkbox text-red-600"
                        />
                        {item.title}
                      </label>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      )}

      <SidebarRail />
    </Sidebar>
  );
}
