import React from "react";
import Navbarss from "@/components/Navbarss";
import Swipeablee from "@/components/Swipeablee";
import { motion } from "framer-motion";
import BasicFramerMotion from "@/components/BasicFramerMotion";
import Popup from "@/components/popup";
import demontext from "../../public/images/Demontext.png";
import slayertext from "../../public/images/Slayertext.png";
import demonslayertext from "../../public/images/demonslayertext.png";

import Image from "next/image";

function Artpage() {
  return (
    <main className="bg-blue-blackk w-full h-[100vh]">
      <div>
        <Navbarss />
      </div>
      <h1 className="text-white text-[30px] text-center font-advent sm:hidden">
        Explore the beautiful <span className="text-purple-purprim">Arts</span>
      </h1>
      <div className="w-[100vw] min-h-[55vh]  flex flex-col mt-[20px]  sm:hidden">
        <div className="flex flex-3  items-center ">
          <div>
            <Image src={demontext} alt="random"></Image>
          </div>
        </div>
        <div className="flex flex-2 justify-end ">
          <div>
            <Image src={slayertext} alt="random"></Image>
          </div>
        </div>
        <div className="flex flex-1  justify-center mt-[20px] font-roboto">
          <h2 className="text-white">Art Gallery of Axon Matalubos</h2>
        </div>
      </div>
      <div className="hidden sm:block sm:w-full sm:min-h-[75vh]  sm:flex">
        <div className="flex-1 flex  flex-col">
          <div className="flex-1 flex  flex-col ">
            <div className="flex-1">
              <h1 className="text-white text-[50px] text-center font-advent ">
                Explore the beautiful{" "}
                <span className="text-purple-purprim">Arts</span>
              </h1>
            </div>
            <div className="flex-1 flex justify-center">
              <div>
                <Image
                  src={demonslayertext}
                  className="w-[700px]"
                  alt="random"
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-blue-800"></div>
          <div className="flex-1 bg-pink-800"></div>
        </div>
        <div className=" bg-green-500 min-w-[300px]"></div>
      </div>
    </main>
  );
}

export default Artpage;
