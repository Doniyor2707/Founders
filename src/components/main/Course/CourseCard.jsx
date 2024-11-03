
import { memo } from "react";

import True from "../../../assets/logo/true.png";
import Kids from "../../../assets/images/kids.png";
import styles from "./Course.module.css";

function CourseCard() {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={Kids} alt="Course Icon" />
        <h2>Kids English</h2>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>30 soatlik darslar</b> (asosiy darslar: haftasiga 2 soat / 3 marta
          Academic support: haftasiga 2 marta / 30 min)
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>Ikkita o‘qituvchi</b> (asosiy darslar: haftasiga 2 soat / 3 marta
          Academic support: haftasiga 2 marta / 30 min)
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>Free Sunday Events</b> (asosiy darslar: haftasiga 2 soat / 3 marta
          Academic support: haftasiga 2 marta / 30 min)
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>Diery</b> (asosiy darslar: haftasiga 2 soat / 3 marta Academic
          support: haftasiga 2 marta / 30 min)
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>Shaxsiy kabinet</b> (asosiy darslar: haftasiga 2 soat / 3 marta
          Academic support: haftasiga 2 marta / 30 min)
        </p>
      </div>
    </div>
  );
}

export default memo(CourseCard) ;
