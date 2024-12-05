
import Button from "../../ui/button/Button";

// img
import Image from "../../../assets/images/main_img.jpg";
// styles
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/register")
  }


  return (
    <div className={styles.home}>
      {/* hero text content */}
      <div className={styles.content}>
        <h1 className={styles.text}>
          Biz millatlarga umumiy tilda muloqot qilishiga yordam beramiz!
        </h1>
        <p className={styles.title}>
          <b>Founders School</b> shu vaqtgacha <b> 4 000+</b> o‘quvchilarni
          hayotini o‘zgartirishga o‘z hissasini qo‘shgan!
        </p>

        <Button style={"10px 20px"} title={"Birinchi darsga yozilish"} onClick={handleNavigate}/>
      </div>

      {/* hero image */}
      <div className={styles.heroImg}>
        <div className={styles.imgContent}>
          <img
            src={Image}
            alt="image_main"
            className={styles.imgRating}
            width={650}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;