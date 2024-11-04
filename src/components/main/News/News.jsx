import Title from "../../ui/mainTitle/Title";

import Events from "../../../assets/images/events.png"
import Natija from "../../../assets/images/natijalar.png"
import Overal from "../../../assets/images/overal.png"
import Milliy from "../../../assets/images/Milliy.png"

// styles
import styles from "./News.module.css"

function News() {
  return (
    <div className={styles.news}>
      <Title title={"Qaynoq yangiliklar:"} />

      <div className={styles.content}>
        <img src={Events} alt="" width={300}/>
        <img src={Natija} alt="" width={300}/>
        <img src={Overal} alt="" width={300}/>
        <img src={Milliy} alt="" width={300}/>
      </div>
    </div>
  );
}

export default News;
