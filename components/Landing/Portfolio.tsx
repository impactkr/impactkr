import { motion } from "framer-motion";

import Inner from "@/components/Inner";
import PortfolioCarusel from "@/components/Landing/PortfolioCarusel";

function Portfolio() {
  return (
    <section className="w-full">
      <Inner className="flex flex-col justify-between pt-[150px] ta:pt-[80px]">
        <motion.h3
          className="mo: text-5xl font-medium tracking-tight text-[#555555] mo:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          Portfolio
        </motion.h3>
      </Inner>

      <PortfolioCarusel />
    </section>
  );
}

export default Portfolio;
