import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion } from "@/components/ui/accordion";
import CategoryList from "./CategoryList";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Category() {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  // Mark active if the current path is inside "category"
  const isActive = location.pathname.startsWith("/category");

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`outline-0 gap-0 cursor-pointer 
            ${isActive ? "bg-[#E41C23] text-white" : "text-gray-800"}`}
        >
          Category
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-full shadow-xl border-2"
        align="start"
      >
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <CategoryList onLinkClick={() => setOpen(false)} />
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
