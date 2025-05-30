import { motion } from "framer-motion";

import Inner from "@/components/Inner";

import BusinessCard from "./BusinessCard";

function Business() {
  return (
    <section className="w-full">
      <Inner className="flex justify-between pt-[150px] ta:flex-col ta:pt-[80px]">
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
          Business
        </motion.h3>

        <ul className="flex justify-end gap-[50px] ta:mt-[40px] ta:justify-between mo:mt-[30px] mo:flex-col">
          <BusinessCard
            delay={0.6}
            src="/image/img_agency.jpg"
            title="분양대행"
            content={
              <>
                아파트, 오피스텔, 상업시설 등 다양한
                <br className="ta:hidden mo:block" />
                주거 및 비주거 상품의 맞춤형 분양
                <br className="ta:hidden mo:block" />
                전략 수립 및 실행
              </>
            }
          />

          <BusinessCard
            className="mt-[100px] ta:items-center mo:text-right"
            delay={0.9}
            src="/image/img_planning.jpg"
            title="컨설팅"
            content={
              <>
                고객 환경에 최적화된
                <br className="ta:hidden mo:block" />
                사업 기획, 설계, MD 구성 컨설팅 제공
              </>
            }
          />

          <BusinessCard
            className="mt-[50px] ta:items-end"
            delay={1.2}
            src="/image/img_services.jpg"
            title="입주대행"
            content={
              <>
                체계적인 입주 프로세스를 운영하여
                <br className="ta:hidden mo:block" />
                고객과 입주자의 만족도를 극대화
              </>
            }
          />
        </ul>
      </Inner>
    </section>
  );
}

export default Business;
