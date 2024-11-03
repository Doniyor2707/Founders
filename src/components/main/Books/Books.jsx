import Title from "../../ui/mainTitle/Title";

import styles from "./Books.module.css";
import FreeBook from "./FreeBook";

function Books() {
  return (
    <div className={styles.book}>
      <Title title={"Bepul kitoblar"} />

      <div className={styles.content}>
        <FreeBook />
        <FreeBook />

        <FreeBook />

        <FreeBook />
      </div>
    </div>
  );
}

export default Books;
