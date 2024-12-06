import Title from "../../ui/mainTitle/Title";
import CourseCard from "./CourseCard";
import styles from "./Course.module.css";

// img
import Kids from "../../../assets/images/kids.png";
import General from "../../../assets/images/General.png";
import IELTS1 from "../../../assets/images/IELTS1.png";

const courseFromData = [
  {
    title: "Kids English",
    img: Kids,
    courseTimeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Free Sunday Events",
    spanTitle: `(har hafta o‘tqaziladigan tadbirlar)`,
    spanParagrfBold: "Diery",
    spanParagrf: `(uyga vazifalarni ko‘rib borish va imtihon natijalarini ko‘rib borish uchun)`,
    cabinetBold: "Shaxsiy kabinet",
    cabinet: `(ota-onalar nazorati uchun shaxsiy kabinet)`,
  },

  {
    title: "General English",
    img: General,
    courseTimeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Umumiy 6 daraja",
    spanTitle: `(Beginnerdan 
    Advancedgacha, har biri 3 oy davom etadi)`,
    spanParagrfBold: "Free Sunday Events",
    spanParagrf: `(har hafta o‘tqaziladigan tadbirlar)`,
    cabinetBold: "Shaxsiy kabinet",
    cabinet: `(ota-onalar nazorati uchun shaxsiy kabinet)`,
  },

  {
    title: "IELTS",
    img: IELTS1,
    courseTimeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Free Sunday Events",
    spanTitle: `(har hafta o‘tqaziladigan tadbirlar)`,
    spanParagrfBold: "Bepul konsultatsiya",
    spanParagrf: `(IELTS topshirishdan oldin beriladigan foydali tavsiyalar)`,
    cabinetBold: "Bepul Mock Exam",
    cabinet: `(Mock Examni bepul topshirish)`,
  },
];

function Course() {
  return (
    <div className={styles["course-container"]}>
      <Title title={"Kurslarimiz:"} />

      <div className={styles.cardContent}>
        {courseFromData.map((item) => (
          <CourseCard {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Course;
