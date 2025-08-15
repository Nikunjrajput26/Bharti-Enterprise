import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import MainHeader from "./components/navbar/MainHeader";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <MainHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/category/:categoryName/:productName"
            element={<CategoryPage />}
          />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
