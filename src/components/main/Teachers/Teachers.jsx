import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "../../ui/mainTitle/Title";

import Teachers1 from "../../../assets/images/teachers.png";
import Teachers2 from "../../../assets/images/teachers2.png";
import Teachers3 from "../../../assets/images/teachers3.png";
import Teachers4 from "../../../assets/images/Teachers4.png";
import Teachers5 from "../../../assets/images/Teachers5.png";
import Teachers6 from "../../../assets/images/Teachers6.png";
import Teachers7 from "../../../assets/images/Teachers7.png";
import Teachers8 from "../../../assets/images/Teachers8.png";
import Teachers9 from "../../../assets/images/Teachers9.png";
import TeachersCard from "./TeachersCard";

// styles
import styles from "./Teachers.module.css";

const teachersData = [
  {
    img: Teachers1,
    teacher: "Iskhakova Leyla",
    Experience: "4 years+",
    position: "ESL Teacher IELTS Instructor",
  },

  {
    img: Teachers2,
    teacher: "Kambarova Omina",
    Experience: "2 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers3,
    teacher: "Yusupov Bunyodbek",
    Experience: "1 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers5,
    teacher: "Abdumalikova Parizoda",
    Experience: "7 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers6,
    teacher: "Asadova Zarrina",
    Experience: "15 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers4,
    teacher: "Karajanova Kamila",
    Experience: "2.5 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers9,
    teacher: "Abatbaeva Sarbina",
    Experience: "2.5 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers7,
    teacher: "Soatmurodova Dinora",
    Experience: "2 years+",
    position: "ESL Teacher",
  },

  {
    img: Teachers8,
    teacher: "Yusupova Sarvinoz",
    Experience: "1.5 years+",
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
            480: { perPage: 2 },
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
