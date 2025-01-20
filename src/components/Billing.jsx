import Pesoas from "../assets/pesoas.png";
import styles, { layout } from "../style";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../constants/utils';

const Billing = () => (
  <motion.section initial='hidden' animate='visible' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <motion.img variants={slideInFromLeft(0.5)} src={Pesoas} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <motion.h2 variants={slideInFromRight(1.2)} className={styles.heading2}>
        Use a antecipação como estratégia de negócio.
      </motion.h2>
      <motion.p variants={slideInFromRight(1.4)} className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A antecipação de recebíveis é estratégica para a empresa em todos os momentos, pois permite que ela mantenha seu caixa positivo e permaneça forte no mercado. Com o factoring você pode pagar suas contas em dia, equilibrar o fluxo de caixa, ganhar poder de negociação com fornecedores, investir na expansão da sua empresa e muitas outras vantagens.
      </motion.p>
    </div>
  </motion.section>
);

export default Billing;
