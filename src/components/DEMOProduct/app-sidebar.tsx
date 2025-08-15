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
  selectedFilters,
  setSelectedFilters,
  ...props
}: {
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: React.Dispatch<
    React.SetStateAction<Record<string, string[]>>
  >;
} & React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

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
      <SidebarHeader className="flex justify-between items-center px-2"></SidebarHeader>

      {!isCollapsed && (
        <SidebarContent>
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
                            selectedFilters[group.title]?.includes(
                              item.value
                            ) || false
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
