import React from "react";
import heroImage from "../../assets/categories/cabels.png";

const ProductCategories: React.FC = () => {
  const categories = [
    { name: "Industrial Fans", img: heroImage },
    { name: "Air Coolers", img: heroImage },
    { name: "HVAC Systems", img: heroImage },
    { name: "Exhaust Systems", img: heroImage },
    { name: "Exhaust Systems", img: heroImage },
    { name: "Exhaust Systems", img: heroImage },
    { name: "Exhaust Systems", img: heroImage },
    { name: "Exhaust Systems", img: heroImage },
  ];

  return (
    <section
      className="bg-[#f0ecf4] rounded-4xl p-6 md:p-10 m-4 md:m-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2
          className="text-2xl md:text-4xl text-gray-800 mb-4"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
        >
          Our Product Categories
        </h2>
        <p className="text-gray-800 text-sm md:text-base">
          Explore our wide range of industrial products designed to deliver high
          performance, durability, and efficiency for your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group cursor-pointer  bg-[#E41C23] rounded-xl py-4 shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="overflow-hidden flex items-center justify-center">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-30 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {cat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-800 text-sm md:text-base">
          All our products are tested for quality and designed to meet the
          highest industrial standards. We ensure reliability you can trust.
        </p>
      </div>
    </section>
  );
};

export default ProductCategories;
