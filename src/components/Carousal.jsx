import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Carousal = () => {

  return (
    <div className="bg-[url('/your-dark-texture.jpg')] bg-cover bg-center  px-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 30,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {[
          "nature-1.jpg",
          "nature-2.jpg",
          "nature-3.jpg",
          "nature-4.jpg",
          "nature-5.jpg",
          "nature-6.jpg",
          "nature-7.jpg",
          "nature-8.jpg",
          "nature-9.jpg",
        ].map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={`https://swiperjs.com/demos/images/${img}`}
              alt={`slide-${idx}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;
