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
        {isOpen ? "Close" : "More About me"}
      </button>
      {isOpen && (
        <div>
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-blue-secondary w-[100%] min-h-[500px] absolute top-20 left-0  z-1 mt-20 mr-14 sm:min-h-[550px] sm:w-[100%] md:w-[50%] lg:w-[50%] lg:top-11"
          >
            <div className="mt-5">
              <h2 className="text-[20px] text-blue-azure">
                •How long have you been a{" "}
                <span className="text-blue-950">Front-end developer?</span>
              </h2>
              <p className="text-[15px]">
                - Not really a long experience, but I started 1 year ago
              </p>
              <h2 className="text-[20px] text-blue-azure">
                •How long have you been a{" "}
                <span className="text-blue-950">Front-end developer?</span>
              </h2>
              <p className="text-[15px]">
                - Not really a long experience, but I started 1 year ago
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Popup;
