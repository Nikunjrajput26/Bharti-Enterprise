import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import MainHeader from "./components/navbar/MainHeader";
import HomePage from "./pages/HomePage";
import DEMOProductsPage from "./pages/DEMOProductsPage";
import AboutUs from "./pages/AboutUs";

function AppContent() {
  const location = useLocation();

  // Check if path matches `/category/:categoryName/:productName`
  const hideFooter = /^\/category\/[^/]+\/[^/]+$/.test(location.pathname);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <MainHeader />
      <div className="mt-32"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:categoryName/:productName"
          element={<DEMOProductsPage />}
        />
        <Route path="/test" element={<DEMOProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
