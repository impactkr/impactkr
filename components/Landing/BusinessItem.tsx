import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

function BusinessItem({
  className,
  delay,
  src,
  title,
  content,
}: {
  className?: string;
  delay: number;
  src: string;
  title: string;
  content: ReactNode;
}) {
  return (
    <motion.li
      className={classNames(
        className,
        "ta:mt-0 ta:flex ta:w-[30%] ta:flex-col mo:w-full",
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: delay,
      }}
    >
      <div className="w-full">
        <div className="relative h-[500px] w-[300px] ta:w-full mo:h-[300px]">
          <Image src={src} alt="" fill className="object-cover" />
        </div>

        <dl className="mt-[30px] text-[#555555] mo:mt-[20px]">
          <dt className="text-[32px] font-semibold mo:text-[20px]">{title}</dt>
          <dd className="mt-[16px] text-[18px] font-medium leading-[24px] mo:mt-[8px] mo:text-[16px]">
            {content}
          </dd>
        </dl>
      </div>
    </motion.li>
  );
}

export default BusinessItem;
