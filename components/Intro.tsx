import { motion } from "framer-motion";

import Logo from "@/components/Logo";

function Intro() {
  return (
    <motion.div
      className="absolute left-0 top-0 z-[3] flex h-screen w-full items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }} // ✅ 1.5초 동안 서서히 사라짐
    >
      <div className="w-[250px] mo:w-[150px]">
        <Logo type="col" />
      </div>
    </motion.div>
  );
}

export default Intro;
