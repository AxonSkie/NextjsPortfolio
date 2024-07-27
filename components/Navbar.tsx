import React from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-secondary w-full h-20 flex min-h-[100px]">
      <div className="flex-1 ">
        <Image src={logo} className=""></Image>
      </div>

      <div className="flex-1 ">
        <ul>
          <li>
            <Link href="/About">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
