import { features } from "../constants";
import styles, { layout } from "../style";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../constants/utils';
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div initial='hidden' animate='visible' className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gray-100`}>
      <motion.img variants={slideInFromRight(0.3)} src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <motion.h4 variants={slideInFromRight(0.5)} className="font-poppins font-semibold text-[#364594] text-[18px] leading-[23.4px] mb-1">
        {title}
      </motion.h4>
      <motion.p variants={slideInFromRight(0.8)} className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </motion.p>
    </div>
  </motion.div>
);

const Business = () => (
  <motion.section initial='hidden' animate='visible' className={layout.section}>
    <div className={layout.sectionInfo}>
      <motion.h2 variants={slideInFromLeft(0.3)} className={styles.heading3}>
        O adiantamento de recebíveis via factoring é o modelo mais eficiente e mais seguro
        para empresas de todo o Brasil.
      </motion.h2>
      <motion.p variants={slideInFromLeft(0.5)} className={`${styles.paragraph1} max-w-[470px] mt-5`}>
        Ideal para negócios que precisam equilibrar o fluxo de caixa sem esperar longos períodos pelos pagamentos dos clientes e que também não tem tempo a perder com a burocracia dos bancos para a liberação de crédito. Você vende à prazo e recebe à vista, com agilidade e as taxas mais competivas do mercado.
      </motion.p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </motion.section>
);

export default Business;
