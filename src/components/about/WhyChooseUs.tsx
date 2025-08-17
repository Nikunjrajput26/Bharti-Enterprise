import React from "react";
import {
  FaBolt,
  FaShieldAlt,
  FaTools,
  FaTruck,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Quality Assured Products",
      description:
        "We supply only tested and certified electrical products ensuring durability and safety.",
      icon: <FaShieldAlt size={24} />,
    },
    {
      title: "Wide Product Range",
      description:
        "From industrial wiring to household electricals, we cover all your supply needs.",
      icon: <FaBolt size={24} />,
    },
    {
      title: "Technical Expertise",
      description:
        "Our skilled team provides guidance and technical support for the right solutions.",
      icon: <FaTools size={24} />,
    },
    {
      title: "On-Time Delivery",
      description:
        "Efficient logistics to ensure your products are delivered without delays.",
      icon: <FaTruck size={24} />,
    },
    {
      title: "Trusted by Businesses",
      description:
        "We are a reliable partner for industries, contractors, and retailers nationwide.",
      icon: <FaUsers size={24} />,
    },
    {
      title: "Customer First Approach",
      description:
        "Strong after-sales support and commitment to customer satisfaction.",
      icon: <FaHandshake size={24} />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
        >
          Why Choose <span className="text-[#E41C23]">Bharti Enterprise</span>?
        </h2>
        <p className="mt-3 text-gray-700">
          We combine quality, reliability, and customer-focused service to
          deliver the best electrical supply solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 shadow-md transition-transform cursor-pointer ${
              index === 0
                ? "bg-[#E41C23] text-white"
                : "bg-[#f0ecf4] text-gray-800 hover:bg-[#E41C23] hover:text-white"
            }`}
          >
            <div
              className={`mb-4 w-12 h-12 flex items-center justify-center rounded-full ${
                index === 0
                  ? "bg-white text-[#E41C23]"
                  : "bg-[#E41C23] text-white hover:bg-white hover:text-[#E41C23]"
              }`}
            >
              {feature.icon}
            </div>
            <h3
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              {feature.title}
            </h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
