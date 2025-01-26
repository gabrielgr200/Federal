import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 mt-24 bg-white`}>
      {stats.map((stat) => (
        <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-dimBlueClear">
            {inView ? (
              <CountUp start={0} end={parseInt(stat.value.replace("+", ""))} duration={2.5} separator="," />
            ) : (
              "0"
            )}
            +
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
