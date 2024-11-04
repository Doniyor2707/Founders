// logo
import Logo from "../../assets/logo/main_icon.svg";
import Lang from "../../assets/logo/flag.svg";
// com
import Button from "../ui/button/Button";

// styles
import styles from "./Header.module.css";
import HeaderList from "./HeaderList";

const headerList = [
  { label: "Biz haqimizda" },
  { label: "Kurslar" },
  { label: "Kutubxona" },
  { label: "Kontakt" },
];

function Header() {
  return (
    <header>
      <div className={styles.header}>
        {/* logo */}
        <div className={styles.list}>
          <img className={styles.headerImg} src={Logo} alt="Logo" width={190} />

          {/* list */}
          {headerList.map((item, index) => (
            <HeaderList item={item} key={index} />
          ))}
        </div>

        {/* langue */}
        <div className={styles.btns}>
          <button className={styles.btnLang}>
            <img src={Lang} alt="language" />
          </button>

          <Button style={"10px 35px"} title={"Kirish"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
