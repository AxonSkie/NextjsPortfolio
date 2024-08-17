"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Swipers() {
  return (
    <div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="w-[400px] min-h-[300px] bg-red-500 mr-[20px]"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] min-h-[300px] bg-yellow-300"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px] min-h-[300px] bg-red-500"></div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}

export default Swipers;
