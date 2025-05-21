// slides/Slide1.tsx
import SubItem from "@/components/SubItem";
import { motion } from "framer-motion";

const Quote = ({
 children,
 author,
}: {
 children: React.ReactNode;
 author: string;
}) => (
 <div className="relative pl-6 border-l-4 border-accent/50">
  <blockquote className="text-2xl italic text-gray-100 leading-relaxed">
   &ldquo;{children}&rdquo;
  </blockquote>
  <cite className="block mt-3 not-italic text-right text-sm text-secondary/80 before:content-['—_']">
   {author}
  </cite>
 </div>
);

const slide1 = [
 <SubItem key="name" delay={0.1}>
  <div className="space-y-10 text-center">
   <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", damping: 10 }}
    className="inline-block"
   >
    <h1 className="text-6xl font-bold text-gradient drop-shadow-lg">
     Enzo Ferracini Patti
    </h1>
   </motion.div>
  </div>
 </SubItem>,

 <SubItem key="impact">
  <div className="mt-8 max-w-2xl mx-auto">
   <Quote author="Aaron Swartz">
    A informação é poder. Mas como todo poder, há aqueles que querem mantê-lo
    para si
   </Quote>

   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="mt-10 text-lg text-gray-300"
   >
    Developer, learner, and dreamer building clean, purposeful software.
   </motion.div>
  </div>
 </SubItem>,
 <SubItem key="name" delay={0.1}>
  <div className="space-y-10 text-center">
   <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", damping: 10 }}
    className="inline-block"
   >
    <h1 className="text-6xl font-bold text-gradient drop-shadow-lg">item4</h1>
   </motion.div>
  </div>
 </SubItem>,
 <SubItem key="name" delay={0.1}>
  <div className="space-y-10 text-center">
   <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", damping: 10 }}
    className="inline-block"
   >
    <h1 className="text-6xl font-bold text-gradient drop-shadow-lg">item5</h1>
   </motion.div>
  </div>
 </SubItem>,
];

export default slide1;
