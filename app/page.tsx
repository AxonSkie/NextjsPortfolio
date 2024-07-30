import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import myportfolio from "../public/images/myprofile.png";
import Boundary from "@/components/Boundary";
import Swipeablee from "@/components/Swipeablee";

export default function Home() {
  return (
    <main className="bg-blue-background min-h-screen ">
      <div>
        <Navbar />
      </div>

      <div className="flex w-full min-h-[500px] mt-8 flex-col sm:flex-row">
        <div className="flex flex-1  justify-center">
          <Image
            src={myportfolio}
            className="w-[100px] h-[400px] sm: w-[700px] h-[500px] "
          ></Image>
        </div>
        <div className="flex flex-1 justify-center items-center sm:mr-5 ">
          <div className="text-white text-[40px] text-center ">
            <h1>Hello! I'm</h1>
            <h1 className="text-blue-primary m-6">
              {" "}
              Axon Gabriel B. Matalubos
            </h1>
            <p className="text-[15px]">
              Im an aspiring UI/UX designer and specilize in front end
              development. Im ready to turn your ideas into an existence.
              Currently a student and a freelancer at the same time
            </p>

            <Link
              href="/About"
              className="mt-5 text-[30px] cursor-pointer text-blue-secondary hover:text-white"
            >
              More about me
            </Link>
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
              </span>{" "}
              Page
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
