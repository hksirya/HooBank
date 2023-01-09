import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-row justify-start items-center md:m-10 m-4`}
      >
        <h1 className="font-poppins font-semibold text-white xs:text-[40px] leading-[43px] xs:leading-[53px] text-[30px] ">
          {stat.value}
        </h1>
        <p className="font-poppins font-normal text-gradient xs:text-[20px] leading-[21px] xs:leading-[26px] text-[15px] ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
