import React from "react";
import LaSalle from "../public/gifs/LaSalle.gif";
import Image from "next/image";
import Upload from "../public/gifs/Upload.gif";

function Invert() {
  return (
    <div className=" hidden sm:flex sm:block sm:flex-row sm:flex-1 bg-blue-background ">
      <div className="flex-1 flex flex-col justify-center hidden sm:flex sm:flex-col  ">
        <h1 className="text-white text-[50px]">
          <span className="text-blue-700 text-[50px]">Uploading Photo</span>{" "}
          System
        </h1>
        <p className="mt-6 text-white m-[10px]">
          its just a little System that I made for the project of my friend, it
          was my first freelance job that I took. This build using
          PHP,HTML,CSS,JS and MySql for the database{" "}
        </p>
      </div>
      <div className="flex-1  flex items-center justify-center">
        {" "}
        <Image src={Upload} className="w-[500px] sm:w-[800px]" />
      </div>
    </div>
  );
}

export default Invert;
