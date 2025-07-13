import React from "react";
import CategoryGrid from "./CategoryGrid";
import InfoSection from "./InfoSection";

const CategoryInfoProps = {
  title: "",
  subtitle: "OUR PRODUCT CATEGORIES",
  description:
    "Discover reliable and efficient electrical products tailored to meet the needs of contractors, builders, OEMs, and industries.",
};

export default function Category() {
  return (
    <div>
      <InfoSection {...CategoryInfoProps} />
      <CategoryGrid />
    </div>
  );
}
