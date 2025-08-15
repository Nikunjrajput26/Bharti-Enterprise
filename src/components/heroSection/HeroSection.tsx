import heroImage from "../../assets/hero.jpeg";

const HeroSection = () => {
  const stats = [
    { value: 50, text: "Lorem ipsum dolor sit amet." },
    { value: 50, text: "Lorem ipsum dolor sit amet." },
    { value: 50, text: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <div
      className="bg-[#f0ecf4] rounded-4xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 m-4 md:m-8 h-auto"
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
        <button
          className="bg-[#E41C23] text-white px-10 py-2 rounded-full hover:bg-[#c9151c] transition-colors"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Lorem, ipsum.
        </button>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 my-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[120px] sm:min-w-[150px] bg-white p-4 rounded-3xl py-6 shadow-sm"
            >
              <div className="rounded-full shadow-md w-12 h-12 mb-4 bg-[#000000]"></div>
              <h1
                className="text-3xl sm:text-4xl text-black"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                {stat.value}
              </h1>
              <p className="text-gray-700 text-sm">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex justify-center items-center">
        <img
          src={heroImage}
          alt="Hero visual"
          className="max-w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
