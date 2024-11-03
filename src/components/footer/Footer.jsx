import Karta from "../../assets/images/Karta.png";
import Logo from "../../assets/logo/logo2.svg";
import Tg from "../../assets/logo/tg.svg";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <h1 className={styles.italic}>We grow together!</h1>

        <img src={Karta} alt="Karta" className={styles.img} />
        <div className={styles.aboutMe}>
          <img src={Logo} alt="" width={200} />

          <div>
            <h4 className={styles.text}>Biz bilan bog‘lanish:</h4>
            <h4 className={styles.text}>+998 71 205-53-33</h4>
          </div>

          <div className={styles.massanger}>
            <h4 className={styles.text}>Ijtimoiy tarmoqlarimiz:</h4>
            <div className={styles.massangerTg}>
              <img src={Tg} alt="" width={40} />
              <img src={Tg} alt="" width={40} />
              <img src={Tg} alt="" width={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
