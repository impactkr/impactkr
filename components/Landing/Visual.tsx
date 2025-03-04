import { motion } from "framer-motion";

import VisualText from "@/components/Landing/VisualText";

function Visual() {
  return (
    <section className="relative size-full">
      <div className="sticky top-0 h-screen before:absolute before:z-[1] before:block before:size-full before:bg-black/50 before:content-['']">
        <video
          src="/video/video_main_1920.mp4"
          className="size-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="absolute left-0 top-0 w-full text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="flex h-screen flex-col items-center justify-center"
        >
          <VisualText
            title="공간을 넘어, 새로운 가치를 경험"
            subtitle="혁신적인 솔루션으로 더 나은 미래를 만들어 갑니다."
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Visual;
