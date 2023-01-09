import styles from "../style";

const Button = ({ style, text }) => (
  <button
    type="button"
    className={`${style} rounded-lg px-6 py-4 bg-blue-gradient font-poppins`}
  >
    {text}
  </button>
);

export default Button;
