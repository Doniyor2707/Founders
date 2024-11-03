import { memo } from "react";

// styles
import styles from "./Button.module.css";

function Button({ title,style }) {
  return <button className={styles.btn} style={{padding:`${style}`}}>{title}</button>;
}

export default memo(Button);
