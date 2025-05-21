// app/page.tsx
"use client";

import { useEffect } from "react";
import { useSlide } from "@/context/SlideContext";
import { AnimatePresence, motion } from "framer-motion";

import slide1 from "@/components/Slide1";
import slide2 from "@/components/Slide2";
import slide3 from "@/components/Slide3";

export default function Home() {
  const { index, setTotal } = useSlide();

  const slidesContent = [slide1, slide2, slide3];

  const flatLengths = slidesContent.map((arr) => arr.length);
  const flatTotal = flatLengths.reduce((a, b) => a + b, 0);

  useEffect(() => {
    setTotal(flatTotal);
  }, [setTotal, flatTotal]);

  let cumulative = 0;
  let group = 0;
  let subIndex = 0;
  for (let i = 0; i < flatLengths.length; i++) {
    if (index < cumulative + flatLengths[i]) {
      group = i;
      subIndex = index - cumulative;
      break;
    }
    cumulative += flatLengths[i];
  }

  const isEvenGroup = group % 2 === 0;
  const themeClass = isEvenGroup
    ? "bg-blue-900 text-white"
    : "bg-white text-blue-900";
  const progressBarColor = isEvenGroup ? "bg-white" : "bg-blue-900";
  const progress = ((index + 1) / flatTotal) * 100;

  return (
    <main
      className={`h-screen w-screen flex flex-col overflow-hidden transition-colors duration-500 ${themeClass}`}
    >
      <div className="w-full flex justify-center pt-6 pb-2">
        <div className="w-3/5 h-3 bg-gray-300 bg-opacity-30 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className={`h-full ${progressBarColor} rounded-full shadow-md`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${group}-${subIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            {slidesContent[group].slice(0, subIndex + 1)}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
