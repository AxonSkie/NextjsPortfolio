import React from "react";
import Image from "next/image";
import instagram from "../public/images/instagram.png";
import facebook from "../public/images/facebook.png";
import github from "../public/images/github.png";
import Link from "next/link";

function MasteryContent() {
  return (
    <div className="bg-black w-full min-h-[600px] mt-5 text-white flex  justify-center flex-col ">
      <div className=" flex-1 flex sm:justify-center sm:text-[30px] sm:betwee">
        <ul className="m-[20px] text-center">
          <h1 className="hidden sm:block sm:text-[50px] ">Mastery</h1>
          <li className="inline-block m-[20px] ">PHP</li>
          <li className="inline-block m-[20px]">Reactjs</li>
          <li className="inline-block m-[20px]">Nextjs</li>
          <li className="inline-block m-[20px]">tailwind</li>
          <li className="inline-block m-[20px]">css</li>
          <li className="inline-block m-[20px]">c++</li>
          <li className="inline-block m-[20px]">MySql</li>
          <li className="inline-block m-[20px]">Krita</li>
        </ul>
      </div>
      <div className=" flex-2 flex items-center justify-center flex-col sm:justify-center sm:text-[30px] border-t-2">
        <div>
          <p className="text-center mt-5">Powered by:</p>
          <div className="inline-block flex">
            <p className="m-[20px]">Nextjs</p>
            <p className="m-[20px]">Tailwind</p>
            <p className="m-[20px]">Framer Motion</p>
          </div>
        </div>
        <ul className="m-[20px] ">
          <li className="inline-block m-[20px] text-center text-[15px] ">
            <Image src={instagram} alt="random"></Image> Instagram
          </li>
          <li className="inline-block m-[20px] text-center text-[15px]">
            {" "}
            <Image src={facebook} alt="random"></Image>Facebook
          </li>
          <li className="inline-block m-[20px] text-center text-[15px]">
            <Image src={github} alt="random"></Image>
            <Link href="https://github.com/AxonSkie?tab=repositories    ">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MasteryContent;
