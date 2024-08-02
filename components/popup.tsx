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
    <div>
      <button
        onClick={handleClick}
        className="bg-blue-dark text-white p-[30px] text-[20px] "
      >
        More About me
      </button>
      {isOpen && (
        <div>
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: -64 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-blue-secondary w-[100%] min-h-[500px] absolute top-20 left-0  z-1 mt-20 mr-14 sm:min-h-[550px] sm:w-[100%] md:w-[50%] lg:w-[50%] lg:top-11"
          >
            <div className="mt-5">
              <h2 className="text-[20px] text-blue-azure lg:text-[30px]">
                •How long have you been a{" "}
                <span className="text-blue-950">Front-end developer?</span>
              </h2>
              <p className="text-[15px] lg:text-[20px]">
                - Not really a long experience, but I started 1 year ago
              </p>
              <h2 className="text-[20px] text-blue-azure mt-4 lg:text-[30px]">
                •Are you currently
                <span className="text-blue-950 "> studying?</span>
              </h2>
              <p className="text-[15px] lg:text-[20px]">
                - Yes, currently Im a student and studying at University La
                Salle Bacolod.
              </p>

              <h2 className="text-[20px] text-blue-azure mt-4 lg:text-[30px]">
                •What course did u take and why?
              </h2>
              <p className="text-[15px] lg:text-[20px]">
                - I chose Computer Science as it aligns to my goal to become a
                professional web developer or a digital artist.
              </p>

              <h2 className="text-[20px] text-blue-azure mt-4 lg:text-[30px]">
                •What are your
                <span className="text-blue-950 "> hobbies?</span>
              </h2>
              <p className="text-[15px] lg:text-[20px]">
                - I have a lot of hobbies like coding apparently, I like to
                draw, play games and mag pa baby.
              </p>
            </div>
            <button
              onClick={handleClick}
              className="bg-blue-dark text-white p-[20px] text-[20px] mt-2 "
            >
              {isOpen ? "Close" : ""}
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Popup;
