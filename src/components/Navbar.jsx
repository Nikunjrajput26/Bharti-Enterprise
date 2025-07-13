import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  const handleCategoryClick = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => {
      const newValue = !prev;
      console.log("Dropdown state:", newValue);
      return newValue;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // Import an icon library (e.g., react-icons)

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img
          src={logo}
          style={{ height: "40px", width: "auto", verticalAlign: "middle" }}
        />
      </div>
      <ul style={styles.navLinks}>
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
        <li style={{ position: "relative" }}>
          <span
            ref={toggleRef}
            style={{ ...styles.link, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem" }}
            onClick={handleCategoryClick}
          >
            Category{" "}
            {showDropdown ? (
              <FaChevronUp size={14} color="#3c3c3c" />
            ) : (
              <FaChevronDown size={14} color="#3c3c3c" />
            )}
          </span>
          {showDropdown && (
            <div
              ref={dropdownRef}
              style={{
                ...styles.dropdown,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
                padding: "1.5rem",
                minWidth: "700px",
                left: 0,
                top: "2.2rem",
              }}
            >
              {subCategories.map((sub) => (
                <div key={sub.name} style={{ minWidth: 150 }}>
                  <div
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#fff",
                    }}
                  >
                    {sub.name}
                  </div>
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
                        >
                          {product}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
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
      <input type="text" placeholder="Search..." style={styles.searchInput} />
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#dfd9d9",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  link: {
    color: "#3c3c3c",
    textDecoration: "none",
    fontSize: "0.8rem",
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "2.2rem",
    left: 0,
    background: "#3c3c3c",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    listStyle: "none",
    padding: "0.5rem 0",
    margin: 0,
    minWidth: "140px",
    maxWidth: "900px",
    zIndex: 100,
    overflow: "auto",
    fontFamily: "'Roboto', sans-serif",
  },
  dropdownLink: {
    display: "block",
    color: "#dfd9d9",
    textDecoration: "none",
    paddingBottom: "0.5rem",
    fontSize: "0.8rem",
    wordBreak: "break-word",
    whiteSpace: "normal",
    maxWidth: "180px",
    fontFamily: "'Roboto', sans-serif",
  },
  searchInput: {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    fontSize: "1rem",
    outline: "none",
    fontFamily: "'Roboto', sans-serif",
  },
};

export default Navbar;
