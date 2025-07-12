import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import "./PartnerSlider.css";

// import required modules
import { Autoplay } from "swiper/modules";

const imageUrls = [
  "https://www.tirupatisales.com/uploads/images/12/3M.png",
  "https://www.tirupatisales.com/uploads/images/12/AMEZZON.png",
  "https://www.tirupatisales.com/uploads/images/12/Almanard.png",
  "https://www.tirupatisales.com/uploads/images/12/Anchor.png",
  "https://www.tirupatisales.com/uploads/images/12/Apar.png",
  "https://www.tirupatisales.com/uploads/images/12/Bajaj.png",
  "https://www.tirupatisales.com/uploads/images/12/Dowells.png",
  "https://www.tirupatisales.com/uploads/images/12/Elmeasure.png",
  "https://www.tirupatisales.com/uploads/images/12/Epcos.png",
  "https://www.tirupatisales.com/uploads/images/12/Finder.png",
  "https://www.tirupatisales.com/uploads/images/12/Fulham.png",
  "https://www.tirupatisales.com/uploads/images/12/Havells.png",
  "https://www.tirupatisales.com/uploads/images/12/Honeywell.png",
  "https://www.tirupatisales.com/uploads/images/12/IMPACK_1.webp",
  "https://www.tirupatisales.com/uploads/images/12/Indoasian.png",
  "https://www.tirupatisales.com/uploads/images/12/K_lite.png",
  "https://www.tirupatisales.com/uploads/images/12/Ledvance.png",
  "https://www.tirupatisales.com/uploads/images/12/Legrand.png",
  "https://www.tirupatisales.com/uploads/images/12/MG_Electrica.png",
  "https://www.tirupatisales.com/uploads/images/12/Molex.png",
  "https://www.tirupatisales.com/uploads/images/12/Nema.png",
  "https://www.tirupatisales.com/uploads/images/12/Osram.png",
  "https://www.tirupatisales.com/uploads/images/12/Philips.png",
  "https://www.tirupatisales.com/uploads/images/12/Precision.png",
  "https://www.tirupatisales.com/uploads/images/12/Prolite.png",
  "https://www.tirupatisales.com/uploads/images/12/RR_Kabel.png",
  "https://www.tirupatisales.com/uploads/images/12/Raychem.png",
  "https://www.tirupatisales.com/uploads/images/12/Siemens.png",
  "https://www.tirupatisales.com/uploads/images/12/TDK.png",
];

export default function PartnerSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {imageUrls.map((url, idx) => (
        <SwiperSlide key={idx}>
          <div
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
            }}
          >
            <img
              src={url}
              alt={`Partner ${idx + 1}`}
              style={{
                maxHeight: "70px",
                maxWidth: "100%",
                objectFit: "contain",
                width: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
