"use client";
import { animate, backIn, easeIn } from "framer-motion";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Dropdowns = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
    <main>
      <div className="relative z-50 ">
        <motion.button
          animate={isOpen ? "open" : "closed"}
          variants={buttonVariants}
          transition={{ duration: 0.2, easeIn }}
          onClick={toggleDropdown}
          className="px-4 py-2 border border-white text-white font-semibold rounded "
        >
          {isOpen ? "X" : "☰"}
        </motion.button>
      </div>
      <div className="w-[100vw]  absolute right-0 flex mt-[10px]">
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
                Demon Slayer
              </li>
              <li className="m-[20px] border-t-2 border-gray-800">
                Demon Slayer
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Dropdowns;
