import { motion } from "framer-motion";

import VisualText from "./VisualText";

function Visual() {
  return (
    <section className="relative h-[230vh] w-full">
      <div className="sticky top-0 h-screen before:absolute before:z-[1] before:block before:size-full before:bg-black/50 before:content-['']">
        <video
          src="/video/video_main.mp4"
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
            duration: 1,
            delay: 0.3,
          }}
          className="flex h-screen flex-col items-center justify-center"
        >
          <VisualText
            title="공간을 넘어, 새로운 가치를 경험"
            subtitle="혁신적인 솔루션으로 더 나은 미래를 만들어 갑니다."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-[10vh] flex h-[50vh] flex-col items-center justify-start"
        >
          <VisualText
            title="공간을 기회로, 기회를 성공으로"
            subtitle="성공적인 투자, 우리가 돕겠습니다."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mt-[10vh] flex h-[60vh] flex-col items-center justify-start"
        >
          <VisualText
            title="모든 공간, 최고의 가치를 만나는 곳"
            subtitle="더 높은 곳으로 임팩트코리아가 함께합니다."
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Visual;
