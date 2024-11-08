import { memo } from "react";

// styles 
import styles from "./Title.module.css"

function Title({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}

export default memo(Title);