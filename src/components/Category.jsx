import React from "react";
import CategoryGrid from "./CategoryGrid";
import InfoSection from "./InfoSection";


const CategoryInfoProps = {
    title: "Our Categories",
    subtitle: "Explore Our Offerings",
    description:
        "Browse through a wide range of categories to find the products and services that best suit your needs.",
};

export default function Category() {
return (
    <div>
        <InfoSection {...CategoryInfoProps} />
        <CategoryGrid />
    </div>
);
}
