import { motion } from "framer-motion";

import Inner from "@/components/Inner";
import BusinessImg from "@/components/Landing/BusinessImg";
import BusinessInfo from "@/components/Landing/BusinessInfo";

function Business() {
  return (
    <section className="w-full">
      <Inner className="flex justify-between py-[150px]">
        <motion.h3
          className="text-5xl font-medium tracking-tight text-[#555555]"
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

        <ul className="flex justify-end gap-[50px]">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          >
            <BusinessImg src="/image/img_agency.jpg" />

            <BusinessInfo title="분양대행">
              아파트, 오피스텔, 상업시설, 지식산업센터 등
              <br />
              다양한 주거 및 비주거 상품의
              <br />
              맞춤형 분양 전략 수립 및 실행
            </BusinessInfo>
          </motion.li>

          <motion.li
            className="mt-[100px]"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >
            <BusinessImg src="/image/img_planning.jpg" />

            <BusinessInfo title="컨설팅">
              고객 환경에 최적화된
              <br />
              사업 기획, 설계, MD 구성 컨설팅 제공
            </BusinessInfo>
          </motion.li>

          <motion.li
            className="mt-[50px]"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 20 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
          >
            <BusinessImg src="/image/img_services.jpg" />

            <BusinessInfo title="입주대행">
              체계적인 입주 프로세스를 운영하여
              <br />
              고객과 입주자의 만족도를 극대화
            </BusinessInfo>
          </motion.li>
        </ul>
      </Inner>
    </section>
  );
}

export default Business;
