import React from "react";

const categories = [
  {
    name: "Fire Safety & PA",
    image:
      "https://www.tirupatisales.com/uploads/images/16/16__FIRE_SAFETY,_PA,.png",
  },
  {
    name: "Lugs & Glands",
    image: "https://www.tirupatisales.com/uploads/images/16/28_LUGS_GLANDS.png",
  },
  {
    name: "Cable Tray",
    image: "https://www.tirupatisales.com/uploads/images/16/29_Cable_Tray.png",
  },
  {
    name: "Motor",
    image: "https://www.tirupatisales.com/uploads/images/16/30__MOTOR.png",
  },
  {
    name: "Conduit Pipes & Metal RCOM",
    image:
      "https://www.tirupatisales.com/uploads/images/16/31__CONDUIT_PIPES_METAL_RCOM_GI_PRECISION_BRAND.png",
  },
  {
    name: "Testing Instruments (MECO)",
    image:
      "https://www.tirupatisales.com/uploads/images/16/32_TESTNG_INSTRUMENTS_MECO.png",
  },
  {
    name: "Architecture Light",
    image:
      "https://www.tirupatisales.com/uploads/images/16/33__ARCHITECTURE_LIGHT.png",
  },
  {
    name: "MRO",
    image: "https://www.tirupatisales.com/uploads/images/16/34_MRO.png",
  },
  {
    name: "Cable",
    image: "https://www.tirupatisales.com/uploads/images/16/CABLE.png",
  },
  {
    name: "Cable Tie",
    image: "https://www.tirupatisales.com/uploads/images/16/Cable_Tie.png",
  },
  {
    name: "Domestic Fan",
    image: "https://www.tirupatisales.com/uploads/images/16/DOMESTIC_FAN.png",
  },
  {
    name: "Earthing",
    image: "https://www.tirupatisales.com/uploads/images/16/EARTHING.png",
  },
  {
    name: "FLP Product",
    image: "https://www.tirupatisales.com/uploads/images/16/FLP_PRODUCT.png",
  },
  {
    name: "Industrial Fan",
    image: "https://www.tirupatisales.com/uploads/images/16/INDUSTRIAL_FAN.png",
  },
  {
    name: "LED Driver",
    image: "https://www.tirupatisales.com/uploads/images/16/LED_DRIVER.png",
  },
  {
    name: "LT Panel",
    image: "https://www.tirupatisales.com/uploads/images/16/LT_PANEL.png",
  },
  {
    name: "LT Switchgear",
    image: "https://www.tirupatisales.com/uploads/images/16/LT_SWITCHGEAR.png",
  },
  {
    name: "Professional Lighting",
    image: "https://www.tirupatisales.com/uploads/images/16/PROF_LIGHTING.png",
  },
  {
    name: "Switch Accessories",
    image: "https://www.tirupatisales.com/uploads/images/16/SWITCH_ACCE_.png",
  },
];

const CategoryGrid = () => (
    <section style={{ padding: "0rem 2rem 2rem 2rem" }}>
        <div style={{ marginBottom: "1.5rem", color: "#333" }}>Categories</div>
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1.5rem",
            }}
        >
            {categories.map((cat) => (
                <div
                    key={cat.name}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "1rem",
                        border: "1px solid #eee",
                        borderRadius: "8px",
                        background: "#fafafa",
                    }}
                >
                    <img
                        src={cat.image}
                        alt={cat.name}
                        style={{
                            width: 120,
                            height: 120,
                            objectFit: "cover",
                            marginBottom: "0.75rem",
                        }}
                    />

                    <span style={{ fontWeight: 600, color: "#333" }}>{cat.name}</span>
                </div>
            ))}
        </div>
    </section>
);

export default CategoryGrid;
