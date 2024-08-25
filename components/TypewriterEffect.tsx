"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Also",
    },
    {
      text: "open",
    },
    {
      text: "for",
    },

    {
      text: "Commissions.",
      className: "text-red-redprim",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} className="text-[30px]" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-red-redprim border dark:border-white border-transparent text-white text-sm">
          Commission me!
        </button>
      </div>
    </div>
  );
}
