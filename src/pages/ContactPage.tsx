import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaBolt,
  FaTools,
  FaUsers,
  FaShieldAlt,
  FaTruck,
  FaHandshake,
  FaPhone,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function ContactPage() {
  return (
    <div className=" min-h-screen">
      <div className="mt-12 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6133454225696!2d72.82192747497942!3d21.167780382989754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fccff692073%3A0xcb14490ed89d0831!2sBharti%20Enterprise!5e0!3m2!1sen!2sin!4v1755430953335!5m2!1sen!2sin"
          className="w-full h-80 md:h-90"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <ContactCards />
    </div>
  );
}

const ContactCards: React.FC = () => {
  const features = [
    {
      title: "Phone",
      description: "+1234567890",
      icon: <FaPhone size={24} />,
    },
    {
      title: "Email",
      description: "support@support.com",
      icon: <IoMail size={24} />,
    },
    {
      title: "Location",
      description:
        "Soma Kanji Estate, Plot No. 201/202, SK-2, Udhana - Magdalla Rd, opp. Sanidev Temple, Near Sosyo Circle, Surat, Gujarat 395007",

      icon: <FaLocationArrow size={24} />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-4xl font-bold text-gray-900"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
        >
          <span className="text-[#E41C23]">Contact Us</span>
        </h2>
        <p className="mt-3 text-gray-700 w-[80%] md:w-[60%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolorem quidem optio nesciunt illo facere! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Facilis dolorem quidem optio nesciunt
          illo facere!
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 shadow-md transition-transform cursor-pointer bg-[#E41C23] text-white"
          >
            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#E41C23]">
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
