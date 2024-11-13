// memo
import { memo } from "react";

// styles
import styles from "./Button.module.css";

function Button({ title,style }) {
  return <button className={styles.btn} >{title}</button>;
}

export default memo(Button);
