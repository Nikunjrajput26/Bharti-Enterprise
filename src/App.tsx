import ActivitySection from "./components/activitySection/ActivitySection";
import ProductCategories from "./components/Categories/ProductCategories";
import { Footer } from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import MainHeader from "./components/navbar/MainHeader";
import Partners from "./components/partner/Partners";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <MainHeader />
      <HeroSection />
      <ActivitySection />
      <ProductCategories />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
