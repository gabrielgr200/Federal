import Fea from "../assets/fea.png";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../constants/utils';

const CardDeal = () => (
  <motion.section initial='hidden' animate='visible' id="works" className={layout.section}>
    <div className={layout.sectionInfo}>
      <motion.h2 variants={slideInFromLeft(0.5)} className={styles.heading3}>
        Como funciona a antecipação de recebíveis?
      </motion.h2>
      <motion.p variants={slideInFromLeft(0.8)} className={`${styles.paragraph1} max-w-[470px] mt-5`}>
        O sistema de factoring é uma das formas mais práticas de antecipação de recebíveis, com o objetivo de gerar crédito para empresas, equilibrar o fluxo de caixa para expansões, obtenção de capital de giro, pagamento para fornecedores, funcionários, entre outras necessidades. Porém diferente de outras operações de antecipação de pagamentos.
      </motion.p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <motion.img variants={slideInFromRight(1)} src={Fea} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </motion.section>
);

export default CardDeal;
