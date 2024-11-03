import { memo } from "react";
import Star from "../../../assets/images/star.png";

// styles
import styles from "./Collections.module.css";
import CollectionsList from "./CollectionsList";

const collectionsData = [
  {
    num: "3+",
    title: "yillik tajriba",
  },
  {
    num: "4 000+",
    title: "mamnun o‘quvchilar",
  },
  {
    num: "50+",
    title: "Ijobiy IELTS natijalari",
  },
  {
    num: "100+",
    title: "Hodimlar soni",
  },
];

function Collections() {
  return (
    <div className={styles.collections}>
      {collectionsData.map((item) => (
        <div className={styles.collectionsList} key={item.num}>
          <CollectionsList item={item} />
        </div>
      ))}
    </div>
  );
}

export default memo(Collections);
