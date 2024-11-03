import { memo } from "react";
import { Link } from "react-router-dom";

// styles 
import styles from "./Header.module.css";

function HeaderList({ item }) {
  return (
    <ul className={styles.listGroup}>
      <li className={styles.listItem}>  
        <Link className={styles.listLink}>{item.label}</Link>
      </li>
    </ul>
  );
}

export default memo(HeaderList);
