"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import myportfolio from "../public/images/myprofile.png";
import Boundary from "@/components/Boundary";
import Swipeablee from "@/components/Swipeablee";
import React from "react";
import Popup from "@/components/popup";
import LaSalle from "../public/gifs/LaSalle.gif";
import Invert from "@/components/Invert";
import Upload from "../public/gifs/Upload.gif";
import Mastery from "@/components/Mastery";
import MasteryContent from "@/components/MasteryContent";
import nezuko from "../public/arts/nezuko.png";
import gojo from "../public/arts/gojo.png";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import myprofilee from "../public/images/myprofile2.png";
import { animate, backIn, easeIn } from "framer-motion";

function Mainfile() {
  const [isOpen, setIsOpen] = useState(false);
  const firstContainer = useRef<HTMLDivElement | null>(null);
  const secondContainer = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const list = {
    hidden: { opacity: 0.5, x: 64 },
    visible: { opacity: 1, x: 0 },
  };
  const buttonVariants = {
    open: { scale: 1.1, rotate: 90 },
    closed: { scale: 1, rotate: 0 },
  };

  const focusFirst = () => {
    if (firstContainer.current) {
      firstContainer.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const focusSecond = () => {
    if (secondContainer.current) {
      secondContainer.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="sticky z-10 top-0">
        <Navbar />

        <div className="sm:hidden">
          <div className=" absolute z-50  top-0 w-[95%] min-h-[100px]  flex justify-end items-center">
            <div>
              <motion.button
                animate={isOpen ? "open" : "closed"}
                variants={buttonVariants}
                transition={{ duration: 0.2, easeIn }}
                onClick={toggleDropdown}
                className="px-4 py-2 bg-blue-dark text-white font-semibold rounded "
              >
                {isOpen ? "X" : "☰"}
              </motion.button>
              {isOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={list}
                  transition={{ duration: 0.5, backIn }}
                  className="absolute mt-2 bg-blue-dark border border-blue-primary rounded-lg shadow-lg w-48 right-1 text-white "
                >
                  <ul>
                    <li className="px-4 py-2  cursor-pointer">
                      <button onClick={focusFirst}>Art Section</button>
                    </li>
                    <li className="px-4 py-2  cursor-pointer">
                      <button onClick={focusSecond}>Projects</button>
                    </li>
                    <li className="px-4 py-2  cursor-pointer">
                      <Link href="/Artpage">Artpage</Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full min-h-[500px]  flex-col sm:flex-col md:flex-row ">
        <div className="flex flex-1  justify-center ">
          <div className="">
            <Image
              src={myprofilee}
              className="w-[500px] h-[550px] sm:w-[700px] sm:h-[600px] md:w-[500px] md:h-[600px] lg:w-[500px] lg:h-[680px]"
              alt="random"
            ></Image>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center mb-[100px] sm:mr-5  sm:mb-[0px]">
          <div className="text-white text-[40px] text-center ">
            <h1 className="text-[30px] sm:text-[50px]">Hello! Im</h1>
            <h1 className="text-blue-primary  text-[30px] font-roboto sm:text-[50px]">
              Axon Gabriel B. Matalubos
            </h1>
            <p className="text-[15px] sm:text-[20px]">
              Im an aspiring UI/UX designer and specilize in front end
              development. Im ready to turn your ideas into an existence.
              Currently a student and a freelancer at the same time
            </p>

            <div className="mt-5">
              <Popup />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Boundary />
      </div>
      <div
        className=" w-full min-h-[700px] flex items-center"
        ref={firstContainer}
      >
        <div className="bg-blue-dark w-full min-h-[600px] text-center flex-row justify-center">
          <h1 className="text-white text-3xl mt-4 ">Some of my Arts :O</h1>
          <div className=" flex justify-center flex-row">
            <div className="hidden lg:flex-1  lg:flex lg:justify-center lg:items-center">
              <Image
                src={nezuko}
                className="sm:w-[400px] sm:h-[400px]"
                alt="h"
              ></Image>
            </div>
            <div className="w-[400px] mt-[20px] flex-1 ">
              <Swipeablee />
            </div>

            <div className=" hidden sm:flex-1 lg:block lg:flex lg:justify-center lg:items-center">
              <Image
                src={gojo}
                className="sm:w-[400px] sm:h-[400px]"
                alt="h"
              ></Image>
            </div>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-white">
              Want to see more? go to my
              <span className="text-blue-primary text-3xl">
                <Link href="/Artpage"> Art</Link>
              </span>
              <span>
                <Link href="/Artpage" className="text-white text-3xl">
                  Page
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Boundary />
      </div>
      <div className=" w-full min-h-[1500px] flex" ref={secondContainer}>
        <div className="bg-blue-dark w-full min-h-[600px] text-center flex flex-col">
          <h1 className="text-white text-3xl mt-4 ">Simple Projects</h1>

          <div className="flex-1  flex  flex-col sm:flex-row">
            <div className="flex-1  flex items-center justify-center">
              {" "}
              <Image
                src={LaSalle}
                className="w-[500px] sm:w-[800px]"
                alt="La Salle Image"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center ">
              <h1 className="text-white text-[20px] sm:text-[50px]">
                <span className="text-green-600">La Salle</span> Management
                System
              </h1>
              <p className="mt-6 text-white m-[10px]">
                its just a little System that I made for the project of my
                friend, it was my first freelance job that I took. This build
                using PHP,HTML,CSS,JS and MySql for the database{" "}
              </p>
            </div>
          </div>
          <div className="flex-1 mt-8  flex items-center sm:hidden bg-blue-background">
            <div className="flex-1  flex  flex-col sm:flex-row">
              <div className="flex-1  flex items-center justify-center">
                {" "}
                <Image src={Upload} className="w-[500px] " alt="Upload Image" />
              </div>
              <div className="flex-1 flex flex-col justify-center sm:hidden">
                <h1 className="text-white text-[20px] mt-4">
                  <span className="text-blue-700">Uploading Photo</span> System
                </h1>
                <p className="mt-6 text-white m-[10px]">
                  its just a little System that I made for the project of my
                  friend, it was my first freelance job that I took. This build
                  using PHP,HTML,CSS,JS and MySql for the database{" "}
                </p>
              </div>
            </div>
          </div>

          <Invert />

          <div className="flex-1 -300 flex items-center bg-blue-dark">
            <div className="flex-1  flex  flex-col sm:flex-row ">
              <div className="flex-1  flex items-center justify-center">
                {" "}
                <Image
                  src={LaSalle}
                  className="w-[500px] sm:w-[800px]"
                  alt="La Salle Gif"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center ">
                <h1 className="text-white text-[20px] sm:text-[50px]">
                  <span className="text-green-600">La Salle</span> Management
                  System
                </h1>
                <p className="mt-6 text-white m-[10px]">
                  its just a little System that I made for the project of my
                  friend, it was my first freelance job that I took. This build
                  using PHP,HTML,CSS,JS and MySql for the database{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Mastery />
        <div>
          <MasteryContent />
        </div>
      </div>
    </div>
  );
}

export default Mainfile;
