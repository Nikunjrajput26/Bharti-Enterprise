import { FaBolt, FaTools, FaUsers } from "react-icons/fa";
import teamImg from "../assets/team.jpg";
import WhyChooseUs from "../components/about/WhyChooseUs";

const AboutUs = () => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* 
      <div className="bg-black h-[45vh] flex items-center justify-center">
      <h1 className="text-[#E41C23] text-7xl font-bold text-center">
        About Us
      </h1>
    </div> */}
      <section className="bg-[#f0ecf4] py-16 px-6 md:px-16">
        {/* Top Text Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span
              className="text-sm font-semibold text-[#E41C23] uppercase tracking-wider"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              About Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 leading-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              <span className="text-[#E41C23]">Bharti Enterprise</span> – Your
              Trusted Electrical Supplier
            </h2>
            <p className="mt-4 text-gray-700">
              We provide high-quality electrical products and solutions to power
              your business and home. With years of expertise, Bharti Enterprise
              stands for reliability, safety, and innovation.
            </p>
            <p className="mt-2 text-gray-700">
              From industrial wiring to modern appliances, we ensure top-notch
              service and a professional team ready to assist you anytime.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
              <div className="bg-[#E41C23] text-white p-3 rounded-full">
                <FaBolt size={24} />
              </div>
              <div>
                <h4
                  className="font-semibold text-lg text-gray-900"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  Quality Products
                </h4>
                <p className="text-sm text-gray-600">
                  Assured performance and trusted electrical brands.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
              <div className="bg-[#E41C23] text-white p-3 rounded-full">
                <FaTools size={24} />
              </div>
              <div>
                <h4
                  className="font-semibold text-lg text-gray-900"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  Expert Support
                </h4>
                <p className="text-sm text-gray-600">
                  Technical assistance and installation guidance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
              <div className="bg-[#E41C23] text-white p-3 rounded-full">
                <FaUsers size={24} />
              </div>
              <div>
                <h4
                  className="font-semibold text-lg text-gray-900"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  Professional Team
                </h4>
                <p className="text-sm text-gray-600">
                  Dedicated staff ensuring smooth supply chain & services.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={teamImg}
              alt="Bharti Enterprise Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={teamImg}
              alt="Electrical Work"
              className="w-full h-full object-cover"
            />
            {/* <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#E41C23] text-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform">
              ▶
            </div>
          </button> */}
          </div>
        </div>
      </section>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
