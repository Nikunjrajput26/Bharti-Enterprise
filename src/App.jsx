import React from "react";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import PartnerSection from "./components/PartnerSection";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on window resize
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Home />
      <PartnerSection />
    </>
  );
}

export default App;
