"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex  min-h-[100vh]  flex-col sm:flex-row absolute  ">
      {isOpen && (
        <div className="bg-black absolute w-full min-h-[100vh] z-10 opacity-[0.5] sm:min-h-[84vh] lg:min-h-[100vh]"></div>
      )}

      <div className="flex-1  relative z-20">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: -64 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-blue-secondary w-[100%] min-h-[70vh]  top-20 left-0  absolute   sm:min-h-[100vh] sm:w-[50%] md:w-[100%] md:min-h-[50vh] md:items-center lg:w-[100%]  lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center "
          >
            {" "}
            <div className="text-center">
              <div className="mt-5">
                <h2 className="text-[20px] text-blue-azure lg:text-[30px] ">
                  •How long have you been a{" "}
                  <span className="text-blue-950">Front-end developer?</span>
                </h2>
                <p className="text-[15px] lg:text-[20px] text-white">
                  - Not really a long experience, but I started 1 year ago
                </p>
                <h2 className="text-[20px] text-blue-azure mt-4 lg:text-[30px]">
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
                  - I chose Computer Science as it aligns to my goal to become a
                  professional web developer or a digital artist.
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
            <div className="w-full flex justify-center">
              <button
                onClick={handleClick}
                className="bg-blue-dark text-white p-[10px] text-[20px] mt-2 rounded-lg "
              >
                {isOpen ? "Close" : ""}
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex-1  flex flex-col ">
        <div className="flex-1 flex justify-center sm:hidden  mt-[40px]">
          <div>
            <button
              onClick={handleClick}
              className="mt-[50px] bg-blue-dark text-white w-[100px] rounded-xl "
            >
              More About me!
            </button>
          </div>
        </div>

        <div className="flex-1  flex items-end justify-center sm:items-center md:items-center  ">
          <div className="flex justify-center mr-[30px] items-center ">
            <button
              className="hidden sm:block sm:bg-blue-dark sm:text-white w-[30px]  sm:min-h-[30px] sm:ml-[20px] sm:w-[200px] sm:text-[25px] sm:p-[10px] sm:mt-[250px] sm:rounded-lg lg:mt-[300px] "
              onClick={handleClick}
            >
              More About me!
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-red-600 absolute top-[400px] w-full min-h-[100h]"></div>
    </div>
  );
}

export default Popup;
