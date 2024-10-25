import React from "react";
import Image from "next/image";
import instagram from "../public/images/instagram.png";
import facebook from "../public/images/facebook.png";
import github from "../public/images/github.png";
import Link from "next/link";

function MasteryContent() {
  return (
    <div className="bg-black w-full min-h-[600px] mt-5 text-white flex  justify-center flex-col ">
      <div className=" flex-2 flex sm:justify-center flex-col sm:text-[30px] sm:betwee">
        <ul className="m-[20px] text-center">
          <h1 className="hidden font-roboto sm:block sm:text-[50px] ">
            Mastery
          </h1>
          <li className="inline-block m-[20px] font-advent">PHP</li>
          <li className="inline-block m-[20px] font-advent">Reactjs</li>
          <li className="inline-block m-[20px] font-advent">Nextjs</li>
          <li className="inline-block m-[20px] font-advent">tailwind</li>
          <li className="inline-block m-[20px] font-advent">css</li>
          <li className="inline-block m-[20px] font-advent">c++</li>
          <li className="inline-block m-[20px] font-advent">MySql</li>
          <li className="inline-block m-[20px] font-advent">Krita</li>
          <li className="inline-block m-[20px] font-advent">Photoshop</li>

          <li className="inline-block m-[20px] font-advent">Figma</li>
        </ul>
        <ul className=" text-center">
          <li className="inline-block m-[20px] font-advent">Typescript</li>
          <li className="inline-block m-[20px] font-advent">Javascript</li>

          <li className="inline-block m-[20px] font-advent">Redux</li>
          <li className="inline-block m-[20px] font-advent">Axios</li>
          <li className="inline-block m-[20px] font-advent">Python</li>
        </ul>
      </div>
      <div className=" flex-2 flex items-center justify-center flex-col sm:justify-center sm:text-[30px] border-t-2">
        <div>
          <p className="text-center mt-5 font-roboto">Powered by:</p>
          <div className="inline-block flex">
            <p className="m-[20px] font-advent">Nextjs</p>
            <p className="m-[20px] font-advent">Tailwind</p>
            <p className="m-[20px] font-advent">Framer Motion</p>
            <p className="m-[20px] font-advent">Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasteryContent;
