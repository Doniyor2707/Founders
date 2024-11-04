// styles
import styles from "./Teachers.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import Teachers1 from "../../../assets/images/teachers.png";
import Teachers2 from "../../../assets/images/teachers2.png";
import Teachers3 from "../../../assets/images/teachers3.png";
import TeachersCard from "./TeachersCard";
import Title from "../../ui/mainTitle/Title";

const teachersData = [
  {
    img: Teachers1,
    teacher: "Iskhakova Leyla",
    Experience: "4 years+",
    IELTS: "7.0",
    position: "ESL Teacher IELTS Instructor",
  },

  {
    img: Teachers2,
    teacher: "Kambarova Omina",
    Experience: "2 years+",
    IELTS: "6.0",
    position: "ESL Teacher",
  },

  {
    img: Teachers3,
    teacher: "Yusupov Bunyodbek",
    Experience: "1 years+",
    IELTS: "7.5",
    position: "ESL Teacher",
  },

  {
    img: Teachers1,
    teacher: "Iskhakova Leyla",
    Experience: "4 years+",
    IELTS: "7.0",
    position: "ESL Teacher IELTS Instructor",
  },

  {
    img: Teachers2,
    teacher: "Kambarova Omina",
    Experience: "2 years+",
    IELTS: "6.0",
    position: "ESL Teacher",
  },

  {
    img: Teachers3,
    teacher: "Yusupov Bunyodbek",
    Experience: "1 years+",
    IELTS: "7.5",
    position: "ESL Teacher",
  },
];

function Teachers() {
  return (
    <div className={styles.teacher}>
      <Title title={"o‘qituvchilarimiz:"} />

      <Splide
        aria-label="My Favorite Images"
        options={{
          perPage: 3,
          breakpoints: {
            768: { perPage: 2 },
            480: { perPage: 1 },
          },
        }}
      >
        {teachersData.map((item, index) => (
          <SplideSlide key={index}>
            <TeachersCard item={item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Teachers;
