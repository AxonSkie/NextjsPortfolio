"use client";
import React from "react";
import Image from "next/image";
import border from "../public/images/border.png";

const Boundary = () => {
  return (
    <div>
      <Image src={border} className="w-full sm:hidden"></Image>
    </div>
  );
};

export default Boundary;
