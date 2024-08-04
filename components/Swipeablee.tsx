"use client";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

const images = [
  "/arts/arlecchino.jpg",
  "/arts/SHINOBU.jpg",
  "/arts/sukuna.jpg",
];

function Swipeablee() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      {...handlers}
      className="relative w-full max-w-lg mx-auto overflow-hidden z-0 flex flex-row"
    >
      <motion.img
        key={currentIndex} // This will force re-render when index changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5, // Adjust as needed
          ease: "easeInOut", // Use an easing function
        }}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-auto"
      />
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
      >
        &gt;
      </button>
    </motion.div>
  );
}

export default Swipeablee;
