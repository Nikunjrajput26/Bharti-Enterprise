import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import MainHeader from "./components/navbar/MainHeader";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import DEMOProductsPage from "./pages/DEMOProductsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <MainHeader />
        <div className="mt-26"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/category/:categoryName/:productName"
            element={<DEMOProductsPage />}
          />
          <Route path="/test" element={<DEMOProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
