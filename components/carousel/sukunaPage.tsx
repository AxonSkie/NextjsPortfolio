import React from "react";
import Image from "next/image";
import nezuku from "@/public/arts/nezuko.png";
import sukuna from "@/public/arts/sukuna.jpg";

function SukunaPage() {
  return (
    <div className="w-full  min-h-[500px] flex justify-center ">
      <div>
        <Image src={sukuna} alt="random" className="w-[500px]"></Image>
        <h1 className="mt-[20px]">Created using Krita</h1>
      </div>
    </div>
  );
}

export default SukunaPage;
