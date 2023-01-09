import { quotes } from "../assets";
import styles from "../style";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row space-x-4">
      <img
        src={img}
        alt="client-img"
        className="w-[48px] h-[48px] rounded-full"
      />
      <div className="flex flex-col">
        <h4 className="font-poppins font-semibold text-white">{name}</h4>
        <p className={`${styles.paragraph}`}>{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
