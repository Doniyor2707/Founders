// memo
import { memo } from "react";

// styles
import styles from "./Button.module.css";

function Button({
  title,
  variant = "primary",
  onClick,
  type = "button",
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default memo(Button);
