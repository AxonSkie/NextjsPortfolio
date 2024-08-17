"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import nezuku from "../public/arts/nezuko.png";
import shinobu from "../public/arts/SHINOBU.png";
import swipe from "../public/images/swipe.png";

function Swipers() {
  return (
    <div className="min-h-screen ">
      <div className="min-h-[100vh] relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full min-h-[300px] bg-green-400 flex border-2 border-white sm:min-h-[600px]">
              <div className="flex-1 bg-pink-500 flex flex-col ">
                <div className="flex-1 bg-black flex justify-center">
                  <div>
                    <Image
                      src={shinobu}
                      className="w-[300px] rounded-md sm:w-[400px] sm:h-[500px]"
                      alt="random"
                    ></Image>
                  </div>
                </div>
                <div className="flex-1 bg-black min-h-[100px] text-center">
                  <div className="flex justify-center mt-[10px]">
                    <div className="bg-white  rounded-full p-[10px]">
                      <h1 className="text-black font-roboto">Shinobu</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-full min-h-[300px] bg-purple-500 flex border-2 border-white sm:min-h-[600px]">
              <div className="flex-1 bg-pink-500 flex flex-col ">
                <div className="flex-1 bg-black flex justify-center ">
                  <div>
                    <Image
                      src={nezuku}
                      className="w-[200px] rounded-md sm:w-[400px] sm:h-[500px]"
                      alt="random"
                    ></Image>
                  </div>
                </div>
                <div className="flex-1 bg-black min-h-[100px] text-center">
                  <div className="flex justify-center mt-[10px]">
                    <div className="">
                      <h1 className="bg-white min-w-[100px] rounded-full p-[10px] font-roboto ">
                        Nezuko Kamado
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full min-h-[300px] bg-yellow-300"></div>
          </SwiperSlide>
          ...
        </Swiper>

        <div className="w-full min-h-[100px]  flex items-center justify-center">
          <Image src={swipe} className="w-[100px]" alt="random"></Image>
          <h1 className="text-white">swipe to change slides</h1>
        </div>
      </div>
    </div>
  );
}

export default Swipers;
