import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

import myportfolio from "../public/images/myprofile.png";

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
            className="w-[500px] h-[400px] sm: w-[700px] h-[500px] "
          ></Image>
        </div>
        <div className="flex flex-1 justify-center items-center sm:mr-5 ">
          <div className="text-white text-[40px] text-center ">
            <h1>Hello! I'm</h1>
            <h1 className="text-blue-primary"> Axon Gabriel B. Matalubos</h1>
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
    </main>
  );
}
