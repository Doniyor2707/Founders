// styles
import Title from "../../ui/mainTitle/Title";
import styles from "./About.module.css";

function AboutTitle() {
  return (
    <div className={styles.aboutTitle}>
      <Title title={"Biz haqimizda"}/>
      <p className={styles.paragrf}>
        Founders school is not just a learning center,{" "}
        <b>it is a huge family.</b> We opened our first doors for students{" "}
        <b>in 2021, November 8th.</b> Our company was founded by{" "}
        <b>two friends Ziyodbek Yusupov</b> and <b>Abduqodir Juraqulov</b> who
        are
        <b>MDIST graduates</b>.
      </p>
      <br />

      <p className={styles.paragrf}>
        Our company has taught more than <b>1000 students</b> so far and made a
        huge number of IELTS results with its students,{" "}
        <b>7.0 + band scores on average.</b>
      </p>
      <br />
      <p className={styles.paragrf}>
        The name "Founders" is not just about two friends, but also it is our  <b>motivated</b> and <b>passionate students</b> who will become future{" "}
        <b>leaders</b> and <b>founders</b> of successful companies.
      </p>
    </div>
  );
}

export default AboutTitle;
