import React from "react";

const brands = [
  "/brand1.png",
  "/brand2.png",
  "/brand3.png",
  "/brand4.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
  "/brand5.png",
];

export function BrandPartnerCarousel() {
  // Duplicate array to ensure seamless loop
  const loopBrands = [...brands, ...brands];

  return (
    <div className="w-full overflow-hidden bg-white py-6">
      <div className="flex animate-scroll">
        {loopBrands.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 px-6">
            <img
              src={logo}
              alt={`Brand ${idx}`}
              className="h-32 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
