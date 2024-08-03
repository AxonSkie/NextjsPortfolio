"use client";
import { animate, backIn, easeIn } from "framer-motion";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <div className="relative z-50">
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
              <Link href="">Achievements</Link>
            </li>
            <li className="px-4 py-2  cursor-pointer">
              <Link href="">Projects</Link>
            </li>
            <li className="px-4 py-2  cursor-pointer">
              <Link href="/Artpage">Artpage</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
