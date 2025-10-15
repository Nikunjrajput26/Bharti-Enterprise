import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import MainHeader from "./components/navbar/MainHeader";
import HomePage from "./pages/HomePage";
import DEMOProductsPage from "./pages/DEMOProductsPage";
import AboutUs from "./pages/AboutUs";
import ImageGalleryPage from "./pages/ImageGalleryPage";
import ContactPage from "./pages/ContactPage";
import productsData from "./data/data.json";

function AppContent() {
  const location = useLocation();

  const hideFooter = /^\/category\/[^/]+\/[^/]+$/.test(location.pathname);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <MainHeader />
      <div className="mt-32"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/category/:parentCategoryName/:categoryName"
          element={<DEMOProductsPage catalog={productsData} />}
        />
        <Route
          path="/test"
          element={<DEMOProductsPage catalog={productsData} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<ImageGalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
