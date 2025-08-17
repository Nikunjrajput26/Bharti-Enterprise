import ActivitySection from "@/components/activitySection/ActivitySection";
import ProductCategories from "@/components/Categories/ProductCategories";
import HeroSection from "@/components/heroSection/HeroSection";
import Partners from "@/components/partner/Partners";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ActivitySection />
      <ProductCategories />
      <Partners />
    </>
  );
};

export default HomePage;
