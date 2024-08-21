import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import icondrop from "../public/images/icondrop.png";
import Dropdown from "./Dropdown";
import socialmedia from "../public/images/Social.png";

const Navbar = () => {
  return (
    <div className="bg-blue-secondary w-full h-20 flex min-h-[50px] sticky z-50">
      <div className="flex-1 flex justify-center items-center  sm:justify-start items-start ">
        <div>
          <Link href="http://localhost:3000">
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

export default Navbar;
