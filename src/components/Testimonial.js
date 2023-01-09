import styles, { layout } from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => (
  <section
    id="Clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="flex flex-col md:flex-row md:items-center md:space-x-40 space-y-10 md:space-y-0">
      <h1 className={`${styles.heading2}`}>
        What people are <br className="md:block hidden" /> saying about us
      </h1>
      <p className={`${styles.paragraph} max-w-[450px]`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="absolute z-[0] w-[90%] h-[90%] -right-[50%] rounded-full blue__gradient" />
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mt-10">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonial;
