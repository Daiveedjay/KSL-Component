import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function OverlayWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-slate-900/50 ">
      {children}
    </motion.div>
  );
}
