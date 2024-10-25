"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import nezuku from "@/public/arts/nezuko.png";
import NezukuPage from "./carousel/nezukuPage";
import SukunaPage from "./carousel/sukunaPage";
import sukuna from "@/public/arts/sukuna.jpg";
import shinobu from "@/public/arts/SHINOBU.png";
import ShinobuPage from "./carousel/shinobuPage";
import GojoPage from "./carousel/gojoPage copy";
import gojo from "@/public/arts/gojo.png";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <h1 className="text-white text-[50px]">
          Art <span className="text-blue-primary text-[50px]">Section</span>
        </h1>
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              WTF
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Art #1",
    title: "Nezuku",
    src: nezuku,
    content: <NezukuPage />,
  },
  {
    category: "Art #2",
    title: "Sukuna / Yuji Itadori",
    src: sukuna,
    content: <SukunaPage />,
  },
  {
    category: "Art #3",
    title: "Kuki Shinobu",
    src: shinobu,
    content: <ShinobuPage />,
  },

  {
    category: "Art #4",
    title: "Gojo Satoru",
    src: gojo,
    content: <GojoPage />,
  },
];
