import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SubItemProps {
 children: ReactNode;
 delay?: number;
 active?: boolean;
}

export default function SubItem({
 children,
 delay = 0,
 active = false,
}: SubItemProps) {
 return (
  <motion.div
   className="text-center space-y-2"
   initial={{ opacity: 0, y: 20 }}
   animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
   transition={{ duration: 0.6, delay }}
   style={{ visibility: active ? "visible" : "hidden" }}
  >
   {children}
  </motion.div>
 );
}
