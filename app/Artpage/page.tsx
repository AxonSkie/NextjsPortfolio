import React from "react";
import Navbarss from "@/components/Navbarss";
import Swipeablee from "@/components/Swipeablee";
import { motion } from "framer-motion";
import BasicFramerMotion from "@/components/BasicFramerMotion";
import Popup from "@/components/popup";
import demontext from "../../public/images/Demontext.png";
import slayertext from "../../public/images/Slayertext.png";
import DemonSlayerLG from "../../public/images/DemonSlayerLG.png";
import Nezukuwu from "../../public/images/NezukuwuP.png";
import instaW from "../../public/images/instagramW.png";
import faceW from "../../public/images/facebookW.png";
import githW from "../../public/images/githubW.png";
import Button from "@/assets/button";

import Image from "next/image";

function Artpage() {
  return (
    <main className="bg-black w-full min-h-screen">
      <div className="sticky top-0 z-10">
        <Navbarss />
      </div>
      <div className=" min-h-[100vh] flex items-center justify-center">
        <div>
          <h1 className="text-white text-[30px] text-center font-advent sm:hidden">
            Explore the beautiful{" "}
            <span className="text-purple-purprim">Arts</span>
          </h1>
          <div className="w-[100vw] min-h-[55vh]  flex flex-col mt-[20px]   sm:hidden sm:mt-[30px]">
            <div className="flex flex-3  items-center justify-center ">
              <div>
                <Image src={demontext} alt="random"></Image>
              </div>
            </div>
            <div className="flex flex-2 justify-center ">
              <div>
                <Image src={slayertext} alt="random"></Image>
              </div>
            </div>
            <div className="flex flex-1  justify-center mt-[20px] font-roboto ">
              <h2 className="text-white">Art Gallery of Axon Matalubos</h2>
            </div>
            <div className="flex-1  flex justify-center">
              <div>
                <Image src={instaW} alt="random" className="w-[70px]"></Image>
              </div>
              <div>
                <Image src={faceW} alt="random" className="w-[70px]"></Image>
              </div>
              <div>
                <Image src={githW} alt="random" className="w-[70px]"></Image>
              </div>
            </div>

            <div className="flex-1  flex justify-center mt-[20px] bg-hero-pattern bg-cover">
              <div>
                <Image
                  src={Nezukuwu}
                  className="w-[300px] bg-purple-purprim rounded-full"
                  alt="random"
                ></Image>
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:w-full lg:min-h-[75vh]  lg:flex ">
            <div className="flex-1 flex  flex-col">
              <div className="flex-1 flex  flex-col ">
                <div className="flex-1 flex justify-center  flex-col ">
                  <div className="flex-1  flex items-end justify-center">
                    <div>
                      <h1 className="text white text-[60px] font-advent text-white">
                        Explore beautiful{" "}
                        <span className="text-purple-purprim">Arts</span>
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1  flex justify-center">
                    <div>
                      <Image
                        src={DemonSlayerLG}
                        className="w-[800px]"
                        alt="random"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-2  flex justify-center">
                <div>
                  <Image src={instaW} alt="random"></Image>
                </div>
                <div>
                  <Image src={faceW} alt="random"></Image>
                </div>
                <div>
                  <Image src={githW} alt="random"></Image>
                </div>
              </div>
              <div className="flex-1 mt-[20px]">
                <div>
                  <Button />
                </div>
              </div>
            </div>
            <div className="  min-w-[300px] flex-2  flex items-center justify-center">
              <div className="bg-hero-pattern bg-cover bg-no-repeat">
                <Image
                  src={Nezukuwu}
                  className="w-[470px] bg-purple-purprim rounded-full mr-[50px]"
                  alt="random"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" sm:block sm:min-h-[100vh] ">
        <div className="relative min-h-[100vh] w-full z-0 bg-nezuko-backM bg-cover sm:bg-nezuko-back sm:bg-no-repeat  ">
          <div className="relative z-10 min-h-[100vh] w-full bg-green-600 "></div>
        </div>
      </div>
    </main>
  );
}

export default Artpage;
