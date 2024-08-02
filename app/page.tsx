import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import myportfolio from "../public/images/myprofile.png";
import Boundary from "@/components/Boundary";
import Swipeablee from "@/components/Swipeablee";
import React from "react";
import Popup from "@/components/popup";
import LaSalle from "../public/gifs/LaSalle.gif";
import Invert from "@/components/Invert";
import Upload from "../public/gifs/Upload.gif";
import Mastery from "@/components/Mastery";
import MasteryContent from "@/components/MasteryContent";

export default function Home() {
  return (
    <main className="bg-blue-background min-h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex w-full min-h-[500px] mt-8 flex-col sm:flex-col md:flex-row">
        <div className="flex flex-1  justify-center">
          <Image
            src={myportfolio}
            className="w-[600px] h-[350px] sm:w-[700px] sm:h-[600px] md:w-[600px] md:h-[400px] lg:w-[1000px] lg:h-[500px]"
            alt="random"
          ></Image>
        </div>
        <div className="flex flex-1 justify-center items-center sm:mr-5 ">
          <div className="text-white text-[40px] text-center ">
            <h1 className="text-[30px] sm:text-[50px]">Hello! Im</h1>
            <h1 className="text-blue-primary  text-[30px] font-roboto sm:text-[50px]">
              Axon Gabriel B. Matalubos
            </h1>
            <p className="text-[15px] sm:text-[20px]">
              Im an aspiring UI/UX designer and specilize in front end
              development. Im ready to turn your ideas into an existence.
              Currently a student and a freelancer at the same time
            </p>

            <div className="mt-5">
              <Popup />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Boundary />
      </div>
      <div className=" w-full min-h-[700px] flex items-center">
        <div className="bg-blue-dark w-full min-h-[600px] text-center flex-row justify-center">
          <h1 className="text-white text-3xl mt-4 ">Some of my Arts :O</h1>
          <div className=" flex justify-center flex-row">
            <div className="w-[400px] mt-[20px]">
              <Swipeablee />
            </div>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-white">
              Want to see more? go to my
              <span className="text-blue-primary text-3xl">
                <Link href="/Artpage"> Art</Link>
              </span>
              <span>
                <Link href="/Artpage" className="text-white text-3xl">
                  Page
                </Link>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Boundary />
      </div>
      <div className=" w-full min-h-[1500px] flex">
        <div className="bg-blue-dark w-full min-h-[600px] text-center flex flex-col">
          <h1 className="text-white text-3xl mt-4 ">Simple Projects</h1>

          <div className="flex-1  flex  flex-col sm:flex-row">
            <div className="flex-1  flex items-center justify-center">
              {" "}
              <Image
                src={LaSalle}
                className="w-[500px] sm:w-[800px]"
                alt="La Salle Image"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center ">
              <h1 className="text-white text-[20px] sm:text-[50px]">
                <span className="text-green-600">La Salle</span> Management
                System
              </h1>
              <p className="mt-6 text-white m-[10px]">
                its just a little System that I made for the project of my
                friend, it was my first freelance job that I took. This build
                using PHP,HTML,CSS,JS and MySql for the database{" "}
              </p>
            </div>
          </div>
          <div className="flex-1 mt-8  flex items-center sm:hidden bg-blue-background">
            <div className="flex-1  flex  flex-col sm:flex-row">
              <div className="flex-1  flex items-center justify-center">
                {" "}
                <Image src={Upload} className="w-[500px] " alt="Upload Image" />
              </div>
              <div className="flex-1 flex flex-col justify-center sm:hidden">
                <h1 className="text-white text-[20px] mt-4">
                  <span className="text-blue-700">Uploading Photo</span> System
                </h1>
                <p className="mt-6 text-white m-[10px]">
                  its just a little System that I made for the project of my
                  friend, it was my first freelance job that I took. This build
                  using PHP,HTML,CSS,JS and MySql for the database{" "}
                </p>
              </div>
            </div>
          </div>

          <Invert />

          <div className="flex-1 -300 flex items-center bg-blue-dark">
            <div className="flex-1  flex  flex-col sm:flex-row ">
              <div className="flex-1  flex items-center justify-center">
                {" "}
                <Image
                  src={LaSalle}
                  className="w-[500px] sm:w-[800px]"
                  alt="La Salle Gif"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center ">
                <h1 className="text-white text-[20px] sm:text-[50px]">
                  <span className="text-green-600">La Salle</span> Management
                  System
                </h1>
                <p className="mt-6 text-white m-[10px]">
                  its just a little System that I made for the project of my
                  friend, it was my first freelance job that I took. This build
                  using PHP,HTML,CSS,JS and MySql for the database{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Mastery />
        <div>
          <MasteryContent />
        </div>
      </div>
    </main>
  );
}
