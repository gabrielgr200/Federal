import styles from "../style";
import { discount, robot } from "../assets";
import Money from "../assets/money.png";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../constants/utils';
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <motion.section initial='hidden' animate='visible' id="home" className={`flex md:flex-row flex-col bg-dimBlueClear ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div className="flex flex-row items-center py-[6px] px-4 bg-slate-200 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <motion.p variants={slideInFromLeft(0.5)} className={`${styles.paragraph1} ml-2`}>
            <span className="text-black">Simples, rápido</span> e {" "}
            <span className="text-black">100% seguro</span>
          </motion.p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1 variants={slideInFromLeft(0.8)} className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Vendeu a prazo e precisa do <br className="sm:block hidden" />{" "}
            <span className="text-gradient">dinheiro à vista?</span>
          </motion.h1>
        </div>

        <motion.p variants={slideInFromLeft(1)} className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Receba à vista e sem burocracia todas as vendas que sua empresa realiza a prazo!
        </motion.p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.img variants={slideInFromRight(1.4)} src={Money} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {/* <GetStarted /> */}
      </div>
    </motion.section>
  );
};

export default Hero;
