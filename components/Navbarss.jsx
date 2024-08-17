import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import icondrop from "../public/images/icondrop.png";
import Dropdowns from "./SecondDropdowns";
import socialmedia from "../public/images/Social.png";

const Navbarss = () => {
  return (
    <div className=" w-full h-20 flex min-h-[100px] sticky z-50 bg-black">
      <div className="flex-1 flex justify-center items-center  sm:justify-start items-start ">
        <div>
          <Link href="/app">
            <Image
              src={logo}
              className="w-[100px] sm:ml-5"
              alt="random"
            ></Image>
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center mr-6">
        <div className="">
          <div className="sm:hidden">
            <Dropdowns />
          </div>
          <div className="hidden sm:block flex text-white ">
            <ul>
              <li className="m-2">
                <Link href="/Artpage" className="m-2">
                  Art page
                </Link>
                <Link href="/About" className="m-2">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarss;
