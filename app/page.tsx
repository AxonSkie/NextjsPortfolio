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
import nezuko from "../public/arts/nezuko.png";
import gojo from "../public/arts/gojo.png";
import { ScrollProvider, useScrollContext } from "../context/ScrollContext";
import Mainfile from "@/components/Mainfile";

export default function Home() {
  return (
    <main className="bg-blue-background min-h-screen">
      <Mainfile />
    </main>
  );
}
