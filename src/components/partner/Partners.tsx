import React from "react";

import partner1 from "../../assets/partners/Havells.png";
import partner2 from "../../assets/partners/Havells.png";
import partner3 from "../../assets/partners/Havells.png";
import partner4 from "../../assets/partners/Havells.png";
import partner5 from "../../assets/partners/Havells.png";

const Partners: React.FC = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5];

  // Duplicate array for infinite scroll illusion
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2
          className="text-2xl md:text-4xl text-black mb-4"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
        >
          Authorised Channel Partner{" "}
        </h2>
        {/* <p className="text-gray-700 text-sm md:text-base">
          Step into a realm of authorized excellence with Bharti. From leading
          lighting brands to trusted switchgear, wires, and cables
          manufacturers, we offer a curated selection of authorized brands to
          power your projects.
        </p> */}
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {scrollingPartners.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center bg-[#f0ecf4] justify-center w-60  h-40 mx-4 p-4 rounded-4xl"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
