import Title from "../../ui/mainTitle/Title";
import CourseCard from "./CourseCard";
import styles from "./Course.module.css";

function Course() {
  return (
    <div className={styles["course-container"]}>
      <Title title={"Kurslarimiz:"} />

      <div className={styles.cardContent}>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Course;
