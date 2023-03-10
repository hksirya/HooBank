import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";

const Hero = () => (
  <section
    id="Home"
    className={`flex flex-col md:flex-row ${styles.paddingY} `}
  >
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row bg-discount-gradient rounded-[10px] mb-2 px-4 items-center py-[6px]">
        <img src={discount} className="w-[32px] h-[32px]" alt="discount" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1
          className="flex-1 font-poppins font-semibold text-[52px]
        ss:text-[72px] text-white ss:leading-[100px] leading-[75px]"
        >
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> Generation</span> Payment Method.
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} my-10 md:my-0 relative`}>
      <img
        src={robot}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
