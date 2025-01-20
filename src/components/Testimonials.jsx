import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../constants/utils';

const Testimonials = () => (
  <motion.section initial='hidden' animate='visible' id="solution" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.h2 variants={slideInFromLeft(0.5)} className="font-poppins font-semibold text-[60px] text-white w-full">
        Temos a solução que <br className="sm:block hidden" /> o seu negócio precisa.
      </motion.h2>
      <div className="w-full md:mt-0 mt-3">
      </div>
    </div>

    <motion.div variants={slideInFromLeft(0.8)} className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </motion.div>
  </motion.section>
);

export default Testimonials;
