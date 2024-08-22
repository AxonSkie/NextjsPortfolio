"use client";
import Popup from "@/components/popup";
import demontext from "../public/images/Demontext.png";
import slayertext from "../public/images/Slayertext.png";
import DemonSlayerLG from "../public/images/DemonSlayerLG.png";
import Nezukuwu from "../public/images/NezukuwuP.png";
import instaW from "../public/images/instagramW.png";
import faceW from "../public/images/facebookW.png";
import githW from "../public/images/githubW.png";
import Button from "@/assets/button";
import Swipers from "@/components/Swipers";
import Navbarss from "./Navbarss";
import Image from "next/image";
import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { animate, backIn, easeIn } from "framer-motion";

function SecondMain() {
  const [isOpen, setIsOpen] = useState(false);
  const demonRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const focusDemon = () => {
    if (demonRef.current) {
      demonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const list = {
    hidden: { opacity: 0.5, y: -64, height: 0, overflow: "hidden" },
    visible: { opacity: 1, y: 0, height: 150 },
  };
  const buttonVariants = {
    open: { scale: 1.1, rotate: 90 },
    closed: { scale: 1, rotate: 0 },
  };
  return (
    <div>
      <div className="sticky top-0 z-10">
        <Navbarss />

        <div className=" absolute w-[100%] min-h-[100px] top-0  z-50 flex justify-end items-center  sm:hidden">
          <div className="relative z-50 ">
            <motion.button
              animate={isOpen ? "open" : "closed"}
              variants={buttonVariants}
              transition={{ duration: 0.2, easeIn }}
              onClick={toggleDropdown}
              className="px-4 py-2 border border-white text-white font-semibold rounded mr-[30px]"
            >
              {isOpen ? "X" : "☰"}
            </motion.button>
          </div>
          <div className="w-[100vw]  absolute right-0 flex mt-[60px]">
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={list}
                transition={{ duration: 0.5, easeIn }}
                className="text-black bg-white absolute w-full min-h-[150px] text-center "
              >
                <ul>
                  <li className="m-[20px] ">Demon Slayer</li>
                  <li className="m-[20px] border-t-2 border-gray-800">
                    <button onClick={focusDemon}>Demon Slayer Section</button>
                  </li>
                  <li className="m-[20px] border-t-2 border-gray-800">
                    Demon Slayer
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className=" min-h-[100vh] flex items-center justify-center">
        <div>
          <h1 className="text-white text-[30px] text-center font-advent sm:hidden">
            Explore the beautiful{" "}
            <span className="text-purple-purprim">Arts</span>
          </h1>
          <div className="w-[100vw] min-h-[55vh]  flex flex-col mt-[20px]   sm:hidden sm:mt-[30px]">
            <div className="flex flex-3  items-center justify-center ">
              <div>
                <Image src={demontext} alt="random"></Image>
              </div>
            </div>
            <div className="flex flex-2 justify-center ">
              <div>
                <Image src={slayertext} alt="random"></Image>
              </div>
            </div>
            <div className="flex flex-1  justify-center mt-[20px] font-roboto ">
              <h2 className="text-white">Art Gallery of Axon Matalubos</h2>
            </div>
            <div className="flex-1  flex justify-center">
              <div>
                <Image src={instaW} alt="random" className="w-[70px]"></Image>
              </div>
              <div>
                <Image src={faceW} alt="random" className="w-[70px]"></Image>
              </div>
              <div>
                <Image src={githW} alt="random" className="w-[70px]"></Image>
              </div>
            </div>

            <div className="flex-1  flex justify-center mt-[20px] bg-hero-pattern bg-cover">
              <div>
                <Image
                  src={Nezukuwu}
                  className="w-[300px] bg-purple-purprim rounded-full"
                  alt="random"
                ></Image>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:w-full lg:min-h-[75vh]  lg:flex ">
            <div className="flex-1 flex  flex-col">
              <div className="flex-1 flex  flex-col ">
                <div className="flex-1 flex justify-center  flex-col ">
                  <div className="flex-1  flex items-end justify-center">
                    <div>
                      <h1 className="text white text-[60px] font-advent text-white">
                        Delve into my{" "}
                        <span className="text-purple-purprim">Art Gallery</span>
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1  flex justify-center">
                    <div>
                      <Image
                        src={DemonSlayerLG}
                        className="w-[800px]"
                        alt="random"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-2  flex justify-center">
                <div>
                  <Image src={instaW} alt="random"></Image>
                </div>
                <div>
                  <Image src={faceW} alt="random"></Image>
                </div>
                <div>
                  <Image src={githW} alt="random"></Image>
                </div>
              </div>
              <div className="flex-1 mt-[20px]">
                <div>
                  <Button />
                </div>
              </div>
            </div>
            <div className="  min-w-[300px] flex-2  flex items-center justify-center">
              <div className="bg-hero-pattern bg-cover bg-no-repeat">
                <Image
                  src={Nezukuwu}
                  className="w-[470px] bg-purple-purprim rounded-full mr-[50px]"
                  alt="random"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-[100vh] sm:block sm:min-h-screen bg-nezuko-backM bg-cover sm:bg-nezuko-back sm:bg-no-repeat">
        <div className="relative min-h-[100vh] w-full z-0   " ref={demonRef}>
          <div className="relative z-10 min-h-[100vh] w-full mt-[40px]">
            <div>
              <Swipers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondMain;
