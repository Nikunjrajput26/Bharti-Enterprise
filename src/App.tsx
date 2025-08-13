import { BrandPartnerCarousel } from "./components/carousel/Brands";
import { CarouselDemo } from "./components/carousel/CarouselDemo";
import { Footer } from "./components/footer/Footer";
import MainHeader from "./components/navbar/MainHeader";
import { CategoriesGrid } from "./components/productsCat/CategoriesGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <MainHeader />
      <CarouselDemo />
      <BrandPartnerCarousel />
      <CategoriesGrid />
      <Footer />
    </div>
  );
}

export default App;
