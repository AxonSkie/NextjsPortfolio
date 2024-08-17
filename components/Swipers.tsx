"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import nezuku from "../public/arts/nezuko.png";
import shinobu from "../public/arts/SHINOBU.png";
import swipe from "../public/images/swipe.png";
import nezuku2 from "../public/arts/nezuku2.png";

function Swipers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="min-h-screen">
      <div className="min-h-[100vh] relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full min-h-[300px] bg-green-400 flex border-2 border-white sm:min-h-[600px]">
              <div className="flex-1 bg-pink-500 flex flex-col">
                <div className="flex-1 bg-black flex justify-center">
                  <div onClick={() => openModal(shinobu)}>
                    <Image
                      src={shinobu}
                      className="w-[300px] rounded-md sm:w-[400px] sm:h-[500px] cursor-pointer"
                      alt="Shinobu"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-black min-h-[100px] text-center">
                  <div className="flex justify-center mt-[10px]">
                    <div className="bg-white rounded-full p-[10px]">
                      <h1 className="text-black font-roboto">Shinobu</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full min-h-[300px] bg-purple-500 flex border-2 border-white sm:min-h-[600px]">
              <div className="flex-1 bg-pink-500 flex flex-col">
                <div className="flex-1 bg-black flex justify-center">
                  <div onClick={() => openModal(nezuku)}>
                    <Image
                      src={nezuku}
                      className="w-[200px] rounded-md sm:w-[400px] sm:h-[500px] cursor-pointer"
                      alt="Nezuko"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-black min-h-[100px] text-center">
                  <div className="flex justify-center mt-[10px]">
                    <div className="">
                      <h1 className="bg-white min-w-[100px] rounded-full p-[10px] font-roboto">
                        Nezuko Kamado
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full min-h-[300px] bg-yellow-300 border-2 border-white">
              <div className="flex-1 bg-pink-500 flex flex-col">
                <div className="flex-1 bg-black flex justify-center">
                  <div onClick={() => openModal(nezuku2)}>
                    <Image
                      src={nezuku2}
                      className="w-[300px] rounded-md sm:w-[400px] sm:h-[500px] cursor-pointer"
                      alt="Nezuko2"
                    />
                  </div>
                </div>
                <div className="flex-1 bg-black min-h-[100px] text-center">
                  <div className="flex justify-center mt-[10px]">
                    <div className="bg-white rounded-full p-[10px]">
                      <h1 className="text-black font-roboto">Old Version</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide items as needed */}
        </Swiper>

        <div className="w-full min-h-[100px] flex items-center justify-center">
          <Image src={swipe} className="w-[100px]" alt="Swipe" />
          <h1 className="text-white">Swipe to change slides</h1>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div className="relative">
              <Image
                src={modalImage}
                className="max-w-full max-h-screen"
                alt="Enlarged view"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Swipers;
