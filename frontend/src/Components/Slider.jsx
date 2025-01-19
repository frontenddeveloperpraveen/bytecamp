import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Slider = ({ details }) => {
  return (
    <div className="lg:w-1/2 mx-2 mt-10 lg:mt-0 lg:mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {details.map((element, index) => (
          <div className="flex justify-center items-center ">
            <SwiperSlide key={index}>
              <img src={element.src} alt={element.alt} className="rounded-md" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
