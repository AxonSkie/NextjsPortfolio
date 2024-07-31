import React from "react";
import Image from "next/image";
import borderers from "../public/images/borderers.png";

function Mastery() {
  return (
    <div>
      <Image src={borderers} className="w-full sm:hidden"></Image>
    </div>
  );
}

export default Mastery;
