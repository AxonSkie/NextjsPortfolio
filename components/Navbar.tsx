import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";
import icondrop from "../public/images/icondrop.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="bg-blue-secondary w-full h-20 flex min-h-[100px]">
      <div className="flex-1 flex justify-center items-center  sm:justify-start items-start ">
        <div>
          <Image src={logo} className="w-[100px] sm:ml-5"></Image>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center mr-6">
        <div className="">
          <div>
            <Dropdown />
          </div>
          <div className="hidden">
            <ul>
              <li>
                <Link href="/About">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
