// components/Progress.tsx
import { motion } from "framer-motion";
import { useSlide } from "@/context/SlideContext";
export const Progress = () => {
 const { index, total } = useSlide();

 return (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
   <div className="w-40 h-1 bg-gray-700 rounded-full overflow-hidden">
    <motion.div
     className="h-full bg-accent"
     initial={{ width: 0 }}
     animate={{ width: `${(index / total) * 100}%` }}
    />
   </div>
   <span className="text-secondary font-mono">
    {index + 1}/{total}
   </span>
  </div>
 );
};
