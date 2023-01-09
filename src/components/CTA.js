import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";

const CTA = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="md:block hidden" />
          in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button style="mt-10" text="Get Started" />
      </div>
      <div className={layout.sectionImgReverse}>
        <img src={card} alt="Card" className="w-[80%] h-[100%] " />
      </div>
    </section>
  );
};

export default CTA;
