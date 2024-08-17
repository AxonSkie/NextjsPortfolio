"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

// Sample images for demonstration
const images = [
  "/arts/arlecchino.jpg",
  "/arts/SHINOBU.jpg",
  "/arts/sukuna.jpg",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(2); // Center image index

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex bg-green-600">
      <motion.div className="absolute w-full h-full flex justify-between items-center px-4">
        {/* Left Image */}
        <motion.div
          className="w-[300px] min-h-[400px] "
          style={{
            backgroundImage: `url(${
              images[(currentIndex - 1 + images.length) % images.length]
            })`,
          }}
        />

        {/* Center Image */}
        <motion.div
          className="w-[400px] min-h-[400px] "
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />

        {/* Right Image */}
        <motion.div
          className="w-[400px] min-h-[400px] "
          style={{
            backgroundImage: `url(${
              images[(currentIndex + 1) % images.length]
            })`,
          }}
        />
      </motion.div>

      {/* Previous Button */}
    </div>
  );
}

export default ImageSlider;
