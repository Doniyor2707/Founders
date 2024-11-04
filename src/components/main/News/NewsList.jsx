// memo
import { memo } from "react";
// img
import Events from "../../../assets/images/events.png";
import Natija from "../../../assets/images/natijalar.png";
import Overal from "../../../assets/images/overal.png";
import Milliy from "../../../assets/images/Milliy.png";

// styles
import styles from "./News.module.css";

function NewsList() {
  return (
    <div class={styles.scrollWrapper}>
      <div class={styles.scrollContainer}>
        <img src={Natija} alt="Image 1" class={styles.scrollImage} />
        <img src={Events} alt="Image 2" class={styles.scrollImage} />
        <img src={Overal} alt="Image 3" class={styles.scrollImage} />
        <img src={Milliy} alt="Image 4" class={styles.scrollImage} />
      </div>
    </div>
  );
}

export default memo(NewsList);
