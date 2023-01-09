import styles, { layout } from "../style.js";
import { bill, apple, google } from "../assets";
const Billing = () => (
  <section id="Product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing "
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-1/2 top-0 white__gradient w-[50%] h-[50%] rounded-full" />
      <div className="absolute z-[0] -left-1/2 bottom-0 pink__gradient w-[50%] h-[50%] rounded-full" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="md:block hidden" />
        billing & invoicing.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap mt-5 space-x-4 mb-10">
        <img src={apple} alt="apple-bill" className="cursor-pointer" />
        <img src={google} alt="apple-bill" className="cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
