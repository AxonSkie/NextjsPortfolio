"use client";
import React from "react";
import sukuna from "../public/images/sukuna.png";
import Image from "next/image";
import jujutsu from "../public/images/jujutsu.png";
import kaisen from "../public/images/Kaisen.png";

function SecondThird() {
  return (
    <div className="min-h-[100vh] w-full  flex flex-col  sm:flex-row">
      <div className="flex-1  flex flex-col sm:hidden">
        <div className="flex-1  flex justify-center items-end">
          <div>
            <h1 className="text-white font-advent text-[30px] text-center">
              More
            </h1>
            <p className="text-white text-[30px] text-center font-advent">
              Awesome <span className="text-red-redprim">Works!</span>
            </p>
          </div>
        </div>
        <div className="flex-1  flex flex-col justify-start items-center mt-[20px]">
          <div>
            <Image src={jujutsu} alt="random" className="w-[300px]"></Image>
          </div>
          <div>
            <Image src={kaisen} alt="random"></Image>
          </div>
        </div>
        <div className="flex-1  flex flex-row justify-center mt-[30px]">
          <div className="mr-[20px]">
            <button className="bg-red-redprim p-[20px] rounded-[20px] cursor-pointer text-white font-poppins">
              View Arts
            </button>
          </div>
          <div>
            <button className="bg-white text-red-redprim p-[20px] rounded-[20px] cursor-pointer font-poppins">
              Download File
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1  sm:hidden flex justify-center">
        <div>
          <Image src={sukuna} className="w-[200px]"></Image>
        </div>
      </div>
      <div className="hidden sm:flex-1 sm:flex bg-purple-400 flex">
        <div className=""></div>
      </div>
    </div>
  );
}

export default SecondThird;
