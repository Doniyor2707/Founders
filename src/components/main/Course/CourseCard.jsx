import { memo } from "react";

import True from "../../../assets/logo/true.png";
import styles from "./Course.module.css";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";

function CourseCard({
  title,
  img,
  courseTimeBold,
  courseTime,
  teacherBold,
  teacher,
  spanTitleBold,
  spanTitle,
  spanParagrfBold,
  spanParagrf,
  cabinetBold,
  cabinet,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <img src={img} alt="Course Icon" />
        <h2>{title}</h2>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{courseTimeBold}</b>
          {courseTime}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{teacherBold}</b>
          {teacher}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{spanTitleBold}</b>
          {spanTitle}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b> {spanParagrfBold}</b>
          {spanParagrf}
        </p>
      </div>
      <div className={styles["card-content"]}>
        <img src={True} alt="icon" />
        <p>
          <b>{cabinetBold}</b>
          {cabinet}
        </p>
      </div>
      <div style={{ marginTop: "17px", textAlign: "center" }}>
        <Button onClick={handleNavigate} title={"Birinchi darsga yozilish"} />
      </div>
    </div>
  );
}

export default memo(CourseCard);
