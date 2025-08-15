import React, { useState } from "react";
import heroImage from "../assets/categories/cabels.png";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const CategoryPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const products = [
    {
      id: 1,
      title: "PVC Insulated Building Wire (H07V-R) -6491X",
      img: heroImage,
    },
    {
      id: 2,
      title: "PVC Insulated Building Wire (H07V-R) -6491X",
      img: heroImage,
    },
    {
      id: 3,
      title: "PVC Insulated Building Wire (H07V-R) -6491X",
      img: heroImage,
    },
    {
      id: 4,
      title: "PVC Insulated Building Wire (H07V-R) -6491X",
      img: heroImage,
    },
  ];

  return (
    <div className="bg-[#f0ecf4] min-h-screen p-4 md:p-6">
      {/* Top Heading + Toggle Button */}
      <div className="mb-6 flex justify-between items-center">
        <h1
          className="text-2xl font-semibold"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Wires & Cables
        </h1>
        <button
          className="md:hidden p-2 rounded bg-gray-200 hover:bg-gray-300"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <AdjustmentsHorizontalIcon className="size-6" />
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar Filters */}
        {/* Sidebar Filters */}
        {sidebarOpen && (
          <aside
            className={`col-span-12 md:col-span-3 bg-gray-50 px-4 rounded-xl border md:static fixed top-0 left-0 w-3/4 md:w-auto h-full md:h-auto z-20 md:z-auto shadow-md md:shadow-none overflow-y-auto transition-transform`}
          >
            {/* Sticky close button */}
            <div className="md:hidden sticky top-0 bg-gray-50 z-30 flex justify-end mb-4 p-2 border-b">
              <button
                className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                onClick={() => setSidebarOpen(false)}
              >
                <XMarkIcon className="size-6" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categories</h3>
              {[
                "Cable",
                "HOUSE WIRE",
                "MULTICORE WIRE",
                "SPEAKER WIRE",
                "CAMERA WIRE",
                "TELEPHONE WIRE",
                "SUBMERSIBLE WIRE",
                "ALU/CU ARMD",
                "SHIELDED CABLE",
                "HT ARMD",
                "ONLY RUBBER CABLE",
                "ONLY JELLY FIELD ARMD",
                "CAT 6 LAN",
                "CONTROL CABLE",
                "Welding cable",
                "INSTRUMENTATION CABLE",
                "FIRE SURVIVAL CABLES",
                "ELASTOMERIC BATTERY CABLE",
                "SOLAR CABLE",
                "AWM CABLE",
              ].map((category, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{category}</span>
                </label>
              ))}
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Brands</h3>
              {["Apar", "Havells", "Molex", "RR Kabel"].map((brand, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <main
          className={`${
            sidebarOpen ? "col-span-12 md:col-span-9" : "col-span-12"
          } transition-all`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition"
              >
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-36 p-4 object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2">{p.title}</h3>
                </div>
                <div className="px-4 py-2 border-t text-center">
                  <button className="text-blue-600 text-sm hover:underline">
                    Quicklook
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
