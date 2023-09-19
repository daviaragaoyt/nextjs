import { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <form
        className={styles.main}
      >
        <div className={styles.box}>
        <label htmlFor="nome">
          <strong className={styles.strong}>Email:</strong>
        </label>
        <input
          type="text"
          name="nome"
          className={styles.input}
        />
        <button type="submit" className={styles.submit}>
          ENVIAR
        </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
