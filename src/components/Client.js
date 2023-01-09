import styles from "../style";
import { clients } from "../constants";
const Client = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`flex-1 ${styles.flexCenter} hover:scale-110 duration-300 cursor-pointer sm:min-w-[192px] min-w-[120px]`}
          key={client.id}
        >
          <img
            src={client.logo}
            alt="logo"
            className="sm:w-[192px] w-[100px] object-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Client;
