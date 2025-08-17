import React from "react";
import infraImage from "../../assets/infra.jpg";
import { FaBolt, FaTools, FaUsers } from "react-icons/fa";

interface InfoCardProps {
  title: string;
  text: string;
}

const infoCards: InfoCardProps[] = [
  {
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.",
  },
  {
    title: "Lorem, ipsum.",
    text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.",
  },
];

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => (
  <div className="bg-[#E41C23] rounded-2xl shadow-md p-5 flex items-center gap-4">
    <div className="bg-white text-[#E41C23] p-3 rounded-full">
      <FaBolt size={24} />
    </div>{" "}
    <div>
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-sm text-white">{text}</p>
    </div>
  </div>
);

const ActivitySection: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 m-4 md:m-8 h-auto"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Left Side */}
      <div className="flex flex-col justify-center items-start space-y-4">
        <div className="py-6 space-y-3">
          <h1
            className="text-2xl md:text-3xl text-black"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            veniam!
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            pariatur laboriosam. Explicabo quasi nobis maxime hic ipsa non iusto
            pariatur.
          </p>
        </div>
        <div className=" w-full">
          <img className=" h-auto" src={infraImage} alt="Infrastructure" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center items-center space-y-4">
        {infoCards.map((card, idx) => (
          <InfoCard key={idx} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
