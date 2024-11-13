import AboutTitle from "./AboutTitle";

import Room1 from "../../../assets/images/room.png";
import Room2 from "../../../assets/images/room2.png";
import Room3 from "../../../assets/images/room3.png";

// styles
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImg}>
          <img className={styles.room1} src={Room1} alt="room" />
          <img className={styles.room2} src={Room2} alt="room" />
          <img className={styles.room3} src={Room3} alt="room" />
        </div>
        {/* title */}
        <AboutTitle />
      </div>
    </div>
  );
}

export default About;
