// logo
import Logo from "../../assets/logo/main_icon.svg";
import Lang from "../../assets/logo/flag.svg";
// com
import Button from "../ui/button/Button";

// styles
import styles from "./Header.module.css";
import HeaderList from "./HeaderList";

import { useState } from "react";
import Modal from "../ui/modal/Modal";

// img
import Teacher from "../../assets/images/teacherRegister.png";
import Student from "../../assets/images/studenRegister.png";
import { useNavigate } from "react-router-dom";

const headerList = [
  { label: "Biz haqimizda" },
  { label: "Kurslar" },
  { label: "Kutubxona" },
  { label: "Kontakt" },
];

function Header() {
  // state
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleTeacher = () => {
    navigate("/");
  };

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

          <Button style={"10px 35px"} title={"Kirish"} onClick={handleModal} />

          <Modal show={modal} onClose={closeModal}>
            <h1 className={styles.modalTitle}>Kirish!</h1>
            <p className={styles.modalP}>
              Kirish uchun profillardan birini tanlang
            </p>

            <div style={{ display: "flex", gap: "35px" }}>
              <div className={styles.modalContentCart} onClick={handleTeacher}>
                <img src={Teacher} alt="Teacher" className={styles.modalImg} />
                <h1>O‘qituvchi</h1>
              </div>
              <div className={styles.modalContentCart}>
                <img src={Student} alt="Student" className={styles.modalImg} />
                <h1>O‘quvchi</h1>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      {/* Modal */}
    </header>
  );
}

export default Header;
