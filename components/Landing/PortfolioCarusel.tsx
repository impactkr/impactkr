import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function PortfolioCarusel() {
  const plugin = React.useRef(Autoplay({ delay: 4000 }));

  return (
    <motion.div
      className="mt-[40px] mo:mt-[30px] mo:px-[20px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.6,
      }}
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
        }}
      >
        <CarouselContent className="m-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="ml-[20px] basis-1/4 p-0 ta:basis-1/2 mo:basis-full"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src="/image/img_portfolio.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-[12px] flex items-center px-[8px]">
                <span className="rounded-sm bg-[#212020] px-[12px] py-[4px] text-white">
                  아파트
                </span>
                <p className="ml-[8px] text-[18px] font-medium">
                  한가람마을우미린
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}

export default PortfolioCarusel;
