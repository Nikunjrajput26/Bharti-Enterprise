import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSection() {
  // Example images array
  const slideImages = [
    "https://www.tirupatisales.com/uploads/images/8/11-1.webp",
    "https://www.tirupatisales.com/uploads/images/8/ELV1.webp",
    "https://www.tirupatisales.com/uploads/images/8/MECO_instrument.webp",
    "https://www.tirupatisales.com/uploads/images/8/Motors.webp",
    "https://www.tirupatisales.com/uploads/images/8/Screenshot_2025-04-29_091154.png",
    "https://www.tirupatisales.com/uploads/images/8/Untitled_design_11zon.webp",
    "https://www.tirupatisales.com/uploads/images/8/WEBSITE_SLIDE2.webp",
    "https://www.tirupatisales.com/uploads/images/8/WEBSITE_SLIDE.webp",
    "https://www.tirupatisales.com/uploads/images/8/all_types_of_wire_and_cable.webp",
    "https://www.tirupatisales.com/uploads/images/8/fan11.webp",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "60vh",
                borderRadius: "12px",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Optional: Overlay text */}
              {/* <div
                style={{
                  color: "#fff",
                  background: "rgba(0,0,0,0.3)",
                  padding: "1rem",
                  borderRadius: "12px 12px 0 0",
                  position: "absolute",
                }}
              >
                Slide {idx + 1}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
