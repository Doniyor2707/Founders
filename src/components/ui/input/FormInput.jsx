// styles
import { memo } from "react";
import styles from "./FormInput.module.css";

function FormInput({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
}

export default memo(FormInput);
