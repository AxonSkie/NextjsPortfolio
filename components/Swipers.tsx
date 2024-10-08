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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<{
    src: string;
    width: number;
    height: number;
  }>({ src: "", width: 0, height: 0 });

  const openModal = (
    imageSrc: string,
    imageWidth: number,
    imageHeight: number
  ) => {
    setModalImage({ src: imageSrc, width: imageWidth, height: imageHeight });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage({ src: "", width: 0, height: 0 });
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
                  <div
                    onClick={() => openModal(shinobu.src, 400, 500)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={shinobu}
                      width={400}
                      height={500}
                      className="rounded-md sm:w-[400px] sm:h-[500px]"
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
                  <div
                    onClick={() => openModal(nezuku.src, 400, 500)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={nezuku}
                      width={400}
                      height={500}
                      className="rounded-md sm:w-[400px] sm:h-[500px]"
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
            <div className="w-full min-h-[300px] bg-black border-2 border-white">
              <div className="flex-1 bg-pink-500 flex flex-col">
                <div className="flex-1 bg-black flex justify-center">
                  <div
                    onClick={() => openModal(nezuku2.src, 400, 500)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={nezuku2}
                      width={400}
                      height={500}
                      className="rounded-md sm:w-[400px] sm:h-[500px]"
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
        </Swiper>

        <div className="w-full min-h-[100px] flex items-center justify-center">
          <Image
            src={swipe}
            width={100}
            height={100}
            className="w-[100px]"
            alt="Swipe"
          />
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
                src={modalImage.src}
                width={modalImage.width}
                height={modalImage.height}
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
