import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const subCategories = [
  {
    name: "Industrial Fans",
    products: [
      "Heavy Duty Exhaust Fans",
      "Pedestal Fans",
      "Wall Mounted Fans",
      "Air Circulators",
      "Axial Flow Fans",
      "Centrifugal Fans",
      "Industrial Ceiling Fans",
    ],
  },
  {
    name: "Wires & Cables",
    products: [
      "House Wiring Cables",
      "Flexible Wires",
      "Armoured Cables",
      "Submersible Cables",
      "Coaxial Cables",
      "LAN Cables",
      "Speaker Wires",
    ],
  },
  {
    name: "Switches & Accessories",
    products: [
      "Modular Switches",
      "Switch Boards",
      "Sockets",
      "MCBs & DBs",
      "Plug Tops",
      "Extension Boards",
      "Indicators",
    ],
  },
  {
    name: "Lighting",
    products: [
      "LED Bulbs",
      "Tube Lights",
      "Panel Lights",
      "Flood Lights",
      "Street Lights",
      "Emergency Lights",
      "Industrial High Bay Lights",
    ],
  },
  {
    name: "Electrical Appliances",
    products: [
      "Water Heaters",
      "Room Heaters",
      "Electric Irons",
      "Geysers",
      "Voltage Stabilizers",
      "Inverters",
      "UPS",
    ],
  },
  {
    name: "Conduits & Fittings",
    products: [
      "PVC Conduits",
      "GI Conduits",
      "Junction Boxes",
      "Bends & Couplers",
      "Flexible Pipes",
      "Cable Trays",
      "Clamps & Saddles",
    ],
  },
  {
    name: "Motors & Pumps",
    products: [
      "Submersible Pumps",
      "Monoblock Pumps",
      "Induction Motors",
      "Cooler Pumps",
      "Pressure Pumps",
      "Openwell Pumps",
      "Self Priming Pumps",
    ],
  },
  {
    name: "Other Electricals",
    products: [
      "Capacitors",
      "Relays",
      "Contactors",
      "Timers",
      "Fan Regulators",
      "Buzzers",
      "Insulation Tapes",
    ],
  },
];

export function CategoryListDropdown() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="-mx-3  rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <Accordion type="single" collapsible className="w-full">
              {subCategories.map((subCategory) => (
                <AccordionItem key={subCategory.name} value={subCategory.name}>
                  <AccordionTrigger>{subCategory.name}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul className="pl-5 text-xs/5 text-gray-500">
                      {subCategory.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
