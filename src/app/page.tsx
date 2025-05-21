"use client";

import React, { ReactElement, useEffect } from "react";
import { motion } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
import { Progress } from "@/components/Progress";
import { CodeBackground } from "@/components/CodeBackground";

import slide1 from "@/components/Slide1";
import slide2 from "@/components/Slide2";
import slide3 from "@/components/Slide3";

type SlideElement = ReactElement<{ active?: boolean }>;

export default function Home() {
 const { index, setTotal } = useSlide();

 const slidesContent: SlideElement[][] = [slide1, slide2, slide3];
 const itemsPerView = [3, 2, 1]; // Quantos itens cada slide mostra por vez

 // Total de "subtelas" (ex: se slide1 tem 6 e mostra 3 → são 2 subtelas)
 const slidePages = slidesContent.map((slide, i) =>
  Math.ceil(slide.length / itemsPerView[i])
 );

 const flatTotal = slidePages.reduce((a, b) => a + b, 0);

 useEffect(() => {
  setTotal(flatTotal);
 }, [setTotal, flatTotal]);

 // Descobrindo qual grupo e subgrupo renderizar com base no índice atual
 let cumulative = 0;
 let group = 0;
 let localPageIndex = 0;

 for (let i = 0; i < slidePages.length; i++) {
  if (index < cumulative + slidePages[i]) {
   group = i;
   localPageIndex = index - cumulative;
   break;
  }
  cumulative += slidePages[i];
 }

 const currentSlide = slidesContent[group];
 const viewSize = itemsPerView[group];

 const startIndex = localPageIndex * viewSize;
 const endIndex = startIndex + viewSize;

 const visibleItems = currentSlide.slice(startIndex, endIndex);

 const isEvenGroup = group % 2 === 0;
 const themeClass = isEvenGroup
  ? "bg-gray-900 text-gray-50"
  : "bg-gray-50 text-gray-900";

 return (
  <main
   className={`h-screen w-screen overflow-hidden transition-colors duration-500 relative ${themeClass}`}
  >
   <CodeBackground />

   <motion.div
    key={`${group}-${localPageIndex}`}
    initial={{ opacity: 0, x: isEvenGroup ? 50 : -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: isEvenGroup ? -50 : 50 }}
    transition={{ duration: 0.5 }}
    className="h-full w-full flex flex-col items-center justify-center p-8"
   >
    <div className="max-w-4xl w-full space-y-8">
     {visibleItems.map((item, i) =>
      React.isValidElement(item)
       ? React.cloneElement(item, {
          active: true, // Agora todos os visíveis são ativos
          key: i,
         })
       : null
     )}
    </div>
   </motion.div>

   <Progress />

   <div className="fixed bottom-8 right-8 text-sm text-gray-400 font-mono">
    <span className="block">← → para navegar</span>
    <span className="block">ESC para sair</span>
   </div>
  </main>
 );
}
