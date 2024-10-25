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
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import myprofilee from "../public/images/myprofile2.png";
import { animate, backIn, easeIn } from "framer-motion";
import { AppleCardsCarouselDemo } from "./CardCarousel";
import { Smokum } from "next/font/google";
import instagram from "../public/images/instagram.png";
import facebook from "../public/images/facebook.png";
import github from "../public/images/github.png";

function Mainfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(true);

  const firstContainer = useRef<HTMLDivElement | null>(null);
  const secondContainer = useRef<HTMLDivElement | null>(null);
  const navBarContainer = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    setIsOpen2(!isOpen2);
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
  const focusNav = () => {
    if (navBarContainer.current) {
      navBarContainer.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsOpen3(true);
      console.log(isOpen3);
    }
  };

  useEffect(() => {
    const handleScroll: any = () => {
      const offset: any = navBarContainer.current?.getBoundingClientRect().top;
      if (offset < 0) {
        setIsOpen3(true);
        console.log(isOpen3);
      } else {
        setIsOpen3(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full  flex flex-col overflow-hidden">
      {isOpen2 && (
        <div className="bg-black min-h-[3945.6px]   md:min-h-[4025px] lg:min-h-[4150px] w-full absolute opacity-[0.5] z-30"></div>
      )}

      <div className="">
        <div className="min-h-[100vh] w-full ">
          <div className="sticky z-50 top-0" ref={secondContainer}>
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

          {isOpen2 && (
            <motion.div
              className="bg-blue-secondary min-h-[400px]  z-40 w-[100%] fixed  rounded-lg sm:w-[50%] sm:left-[25%] text sm:p-[20px]"
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ scale: 1, rotate: 360, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <div className="text-center p-[20px]">
                <div className="flex justify-center">
                  <h1 className="text-[30px]">More About Me! </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </div>
                <div className="mt-5">
                  <h2 className="text-[20px] text-blue-azure lg:text-[30px] ">
                    •How long have you been a{" "}
                    <span className="text-blue-950">Front-end developer?</span>
                  </h2>
                  <p className="text-[15px] lg:text-[20px] text-white">
                    - Not really a long experience, but I started 1 year ago
                  </p>
                  <h2 className="text-[10px] text-blue-azure mt-4 lg:text-[30px]">
                    •Are you currently
                    <span className="text-blue-950 "> studying?</span>
                  </h2>
                  <p className="text-[15px] lg:text-[20px] text-white">
                    - Yes, currently Im a student and studying at University La
                    Salle Bacolod.
                  </p>

                  <h2 className="text-[20px] text-blue-azure mt-4 lg:text-[30px]">
                    •What course did u take and why?
                  </h2>
                  <p className="text-[15px] lg:text-[20px] text-white">
                    - I chose Computer Science as it aligns to my goal to become
                    a professional web developer or a digital artist.
                  </p>

                  <h2 className="text-[20px] text-blue-azure mt-4 lg:text-[30px]">
                    •What are your
                    <span className="text-blue-950 "> hobbies?</span>
                  </h2>
                  <p className="text-[15px] lg:text-[20px] text-white">
                    - I have a lot of hobbies like coding apparently, I like to
                    draw, play games and designing.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {isOpen3 && (
            <div className="bg-black fixed w-[50px] min-h-[50px] z-20 left-[0%] top-[83.5%] flex rounded-full">
              <button
                className="bg-blue-primary flex-1 rounded-full"
                onClick={focusNav}
              >
                up
              </button>
            </div>
          )}
          <div className="flex w-full min-h-[100vh]  flex-col sm:flex-col md:flex-row ">
            <div className=" hidden  sm:w-[100%] sm:min-h-[100px] sm:absolute sm:top-20 sm:flex sm:justify-center sm:items-center sm:border-b-2 sm:border-white ">
              <div>
                <button onClick={focusFirst} className="text-white">
                  Art Section
                </button>

                <button onClick={focusFirst} className="text-white ml-[30px]">
                  Projects Section
                </button>
              </div>
            </div>
            <div
              className="flex flex-1  justify-center flex-col  items-center "
              ref={navBarContainer}
            >
              <div className="">
                <Image
                  src={myprofilee}
                  className="w-[400px] h-[550px] sm:w-[400px] sm:h-[500px] md:w-[300px] md:h-[600px] lg:w-[600px] lg:h-[835px]"
                  alt="random"
                ></Image>
              </div>

              <div className=""></div>
            </div>

            <div className="flex flex-1 justify-center items-center mb-[100px]   sm:mb-[0px] ">
              <div className="text-white text-[40px] text-center ">
                <h1 className="text-[30px] sm:text-[30px]">Hello! Im</h1>
                <h1 className="text-blue-primary  text-[30px] font-roboto sm:text-[50px]">
                  Axon Gabriel B. Matalubos
                </h1>
                <p className="text-[15px] sm:text-[20px] md:text-[15px]">
                  Im an aspiring UI/UX designer and specilize in front end
                  development. Im ready to turn your ideas into an existence.
                  Currently a student and a freelancer at the same time. I also
                  do arts for my freetime, you can see my artworks below
                </p>

                <ul className="flex justify-center mt-[10px]">
                  <li>
                    <Link href="https://web.facebook.com/axon.draws.1/">
                      <Image
                        src={facebook}
                        alt="random"
                        className="w-[80px]"
                      ></Image>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/AxonSkie?tab=repositories">
                      <Image
                        src={github}
                        alt="random"
                        className="w-[80px]"
                      ></Image>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/axondraws1/">
                      <Image
                        src={instagram}
                        alt="random"
                        className="w-[80px]"
                      ></Image>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="w-full min-h-[100px] hidden sm:block md:hidden lg:hidden"></div> */}
          </div>

          <div
            className=" w-full min-h-[700px] flex items-center"
            ref={firstContainer}
          >
            <div className="bg-blue-dark w-full min-h-[100vh] text-center flex-row justify-center border-t-2 border-white relative z-10">
              <div>
                <AppleCardsCarouselDemo />
              </div>
              <div className=" flex justify-center flex-row">
                <div className="hidden lg:flex-1  lg:flex lg:justify-center lg:items-center"></div>
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

          <div className=" w-full min-h-[100vh] flex  gap-[20px]  justify-center items-center flex-col md:flex-row md:flex-wrap">
            <div className="w-[60%] md:w-[40%] lg:w-[30%] h-[480px] bg-gradient-to-t from-blue-primary via-gray-600 to-white ...  flex flex-col rounded-lg mt-[10px] border-2 border-white">
              <div className="flex-1  flex justify-center items-center flex-col">
                <h1 className="text-[20px] mb-[20px] text-blue-darker font-poppins border-b-2 border-black">
                  <span className="text-green-500 ">La Salle</span> Management
                  System
                </h1>
                <div>
                  <Image
                    src={LaSalle}
                    alt="random"
                    className="w-[250px]"
                  ></Image>
                </div>
              </div>
              <div className="flex-1 mt-[10px] text-center">
                <div className="flex-1  flex flex-row justify-center mb-[10px] gap-[10px]">
                  <div className="w-[50px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>Php</h1>
                  </div>
                  <div className="min-w-[70px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>MySql</h1>
                  </div>
                  <div className="min-w-[70px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>HTML</h1>
                  </div>
                  <div className="min-w-[50px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>CSS</h1>
                  </div>
                </div>

                <p className="mt-6 text-black m-[10px] text-[15px]">
                  It{"'"}s just a little System that I made for the project of
                  my friend, it was my first freelance job that I took. This
                  build using PHP,HTML,CSS,JS and MySql for the database
                </p>
              </div>
            </div>
            <div className="w-[60%] md:w-[40%] lg:w-[30%] h-[480px] bg-gradient-to-t from-blue-primary via-gray-600 to-white ...  flex flex-col rounded-lg mt-[10px] border-2 border-white">
              <div className="flex-1  flex justify-center items-center flex-col">
                <h1 className="text-[20px] mb-[20px] text-blue-darker font-poppins border-b-2 border-black">
                  <span className="text-blue-primary ">Upload </span>
                  System
                </h1>
                <div>
                  <Image
                    src={Upload}
                    alt="random"
                    className="w-[250px]"
                  ></Image>
                </div>
              </div>
              <div className="flex-1 mt-[10px] text-center">
                <div className="flex-1  flex flex-row justify-center mb-[10px] gap-[10px]">
                  <div className="w-[50px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>Php</h1>
                  </div>
                  <div className="min-w-[70px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>MySql</h1>
                  </div>
                  <div className="min-w-[70px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>HTML</h1>
                  </div>
                  <div className="min-w-[50px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>CSS</h1>
                  </div>
                </div>

                <p className="mt-6 text-black m-[10px] text-[15px]">
                  <p className="mt-6 text-white m-[10px]">
                    My very first fully functional CRUD system. This was my 2nd
                    freelance Job that I tool. This is an Art Gallery website
                    This build using PHP,HTML,CSS,JS and MySql for the database
                  </p>
                  ;
                </p>
              </div>
            </div>
            <div className="w-[60%] lg:w-[50%] h-[480px] bg-gradient-to-t from-blue-primary via-gray-600 to-white ...  flex flex-col rounded-lg mt-[10px] border-2 border-white">
              <div className="flex-1  flex justify-center items-center flex-col">
                <h1 className="text-[20px] mb-[20px] text-blue-darker font-poppins border-b-2 border-black">
                  <span className="text-red-500 ">Axon{"'"}s</span> Ecommerce
                </h1>
                <div>
                  <Image
                    src={LaSalle}
                    alt="random"
                    className="w-[250px]"
                  ></Image>
                </div>
              </div>
              <div className="flex-1 mt-[10px] text-center">
                <div className="flex-1  flex flex-row justify-center mb-[10px] gap-[10px]">
                  <div className="w-[50px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>React</h1>
                  </div>
                  <div className="min-w-[90px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>TypeScript</h1>
                  </div>
                  <div className="min-w-[70px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>Nextjs</h1>
                  </div>
                  <div className="min-w-[80px] min-h-[20px] bg-white  rounded-full text-center mt-[10px] border-2 border-blue-primary">
                    <h1>Tailwind</h1>
                  </div>
                </div>

                <p className="mt-6 text-black m-[10px] text-[15px]">
                  It{"'"}s just a little System that I made for the project of
                  my friend, it was my first freelance job that I took. This
                  build using PHP,HTML,CSS,JS and MySql for the database
                </p>
              </div>
            </div>
          </div>
          <div>
            <Mastery />
            <div>
              <MasteryContent />
            </div>
          </div>
          {/* <div className=" w-full min-h-[100vh] absolute top-[180px] ">
            <Popup></Popup>
          </div> */}
        </div>
      </div>
      <div className="z-40 fixed  w-[50%] min-h-[100px] bottom-[50%] top-[80%] left-[70%] flex justify-center items-center">
        <div>
          <motion.button
            className="bg-blue-primary w-[50px] min-h-[50px] rounded-full mr-[50px]"
            onClick={handleClick}
            whileHover={{
              scale: 1.5,
              backgroundColor: "#4f46e5",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.2, // Optional: Add a tap effect
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              // You can adjust the following properties for delay on hover out
              delay: 0.1, // Delay for returning to the default size
            }}
          >
            +
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Mainfile;
