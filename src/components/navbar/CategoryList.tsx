import { Link } from "react-router-dom";

interface SubCategory {
  name: string;
  products: string[];
}

interface CategoryListProps {
  onLinkClick?: () => void;
}
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

export default function CategoryList({ onLinkClick }: CategoryListProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl my-2 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {subCategories.map((subCategory) => (
              <div key={subCategory.name} className="relative">
                <p className="text-sm/6 font-semibold text-gray-900">
                  <Link
                    to={`/category/${subCategory.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="hover:text-red-600 transition-colors"
                    onClick={onLinkClick}
                  >
                    {subCategory.name}
                  </Link>
                </p>

                {subCategory.products.map((product) => (
                  <p
                    key={product}
                    className="mt-1 text-xs/5 text-gray-500 hover:text-[#E03131] transition-colors"
                  >
                    <Link
                      to={`/category/${subCategory.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${product
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={onLinkClick}
                    >
                      {product}
                    </Link>
                  </p>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
