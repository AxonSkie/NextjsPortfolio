"use client";
import React from "react";
import { motion } from "framer-motion";

function BasicFramerMotion() {
  return (
    <motion.div
      className="bg-blue-600 w-[300px] min-h-[250px]"
      initial={{ rotate: 0 }}
      animate={{ rotate: 180 }}
    >
      <h1>wassup</h1>
    </motion.div>
  );
}

export default BasicFramerMotion;
