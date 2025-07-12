import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Example subcategories and products
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

  // Close menu on route change or outside click
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (
        !e.target.closest(".mobile-navbar-menu") &&
        !e.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

return (
    <nav style={styles.nav}>
        <div style={styles.logo}>MyApp</div>
        <div
            className="hamburger"
            style={styles.hamburger}
            onClick={() => setMenuOpen((open) => !open)}
        >
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
        </div>

        {/* Background blur overlay */}
        {menuOpen && (
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 199,
                    background: "rgba(34,34,34,0.45)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    transition: "opacity 0.3s",
                }}
            />
        )}

        {menuOpen && (
            <div className="mobile-navbar-menu" style={styles.mobileMenu}>
                <button
                    style={styles.closeButton}
                    onClick={() => {
                        setMenuOpen(false);
                        setShowDropdown(false);
                    }}
                    aria-label="Close menu"
                >
                    ×
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchInputMobile}
                />
                <ul
                    style={{
                        ...styles.mobileNavLinks,
                        maxHeight: "75vh",
                        overflowY: "auto",
                        paddingRight: "0.5rem",
                    }}
                >
                    <li>
                        <a href="/" style={styles.link}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" style={styles.link}>
                            About
                        </a>
                    </li>
                    <li>
                        <div
                            style={{
                                ...styles.link,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            Category
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {subCategories.map((sub, idx) => (
                                <li key={sub.name} style={{ marginBottom: "0.5rem" }}>
                                    <div
                                        style={{
                                            ...styles.link,
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingLeft: "1rem",
                                        }}
                                        onClick={() =>
                                            setShowDropdown((prev) =>
                                                typeof prev === "object"
                                                    ? { ...prev, [idx]: !prev[idx] }
                                                    : { [idx]: true }
                                            )
                                        }
                                    >
                                        {sub.name}
                                        <span style={{ marginLeft: 8 }}>
                                            {showDropdown && typeof showDropdown === "object" && showDropdown[idx]
                                                ? "▲"
                                                : "▼"}
                                        </span>
                                    </div>
                                    {showDropdown &&
                                        typeof showDropdown === "object" &&
                                        showDropdown[idx] && (
                                            <div style={styles.mobileDropdown}>
                                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                                    {sub.products.map((product) => (
                                                        <li key={product}>
                                                            <a
                                                                href={`/category/${encodeURIComponent(
                                                                    sub.name.toLowerCase()
                                                                )}/${encodeURIComponent(
                                                                    product.toLowerCase().replace(/\s+/g, "-")
                                                                )}`}
                                                                style={styles.dropdownLink}
                                                                onClick={() => setMenuOpen(false)}
                                                            >
                                                                {product}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <a href="/gallery" style={styles.link}>
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="/blogs" style={styles.link}>
                            Blogs
                        </a>
                    </li>
                    <li>
                        <a href="/career" style={styles.link}>
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="/contact" style={styles.link}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="/technical-guide" style={styles.link}>
                            Technical Guide
                        </a>
                    </li>
                </ul>
            </div>
        )}
    </nav>
);
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.2rem",
    background: "#222",
    color: "#fff",
    position: "relative",
    zIndex: 200,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  hamburger: {
    width: 32,
    height: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 201,
  },
  bar: {
    width: 24,
    height: 3,
    background: "#fff",
    margin: "3px 0",
    borderRadius: 2,
    transition: "all 0.3s",
  },
  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "80vw",
    maxWidth: 340,
    height: "100vh",
    background: "#222",
    color: "#fff",
    boxShadow: "-2px 0 8px rgba(0,0,0,0.15)",
    padding: "1.5rem 1.2rem",
    transition: "right 0.3s",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  mobileNavLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    scroll: "smooth",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.1rem",
    padding: "0.2rem 0",
    display: "block",
  },
  mobileDropdown: {
    background: "#333",
    borderRadius: "4px",
    marginTop: "0.7rem",
    padding: "1rem",
    maxHeight: "50vh",
    overflowY: "auto",
  },
  dropdownLink: {
    display: "block",
    color: "#fff",
    textDecoration: "none",
    padding: "0.3rem 0",
    fontSize: "1rem",
    wordBreak: "break-word",
    whiteSpace: "normal",
    maxWidth: "180px",
  },
  searchInputMobile: {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "1rem",
    width: "100%",
    boxSizing: "border-box",
  },
  closeButton: {
    position: "fixed",
    width: "8vw",
    height: "8vw",
    top: "0.2rem",
    left: "0.2rem",
    borderRadius: "9rem",
  },
};

export default Navbar;
