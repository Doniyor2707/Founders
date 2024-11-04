import Title from "../../ui/mainTitle/Title";

// styles
import styles from "./News.module.css";
import NewsList from "./NewsList";

function News() {
  return (
    <div className={styles.news}>
      <Title title={"Qaynoq yangiliklar:"} />

      <NewsList />
    </div>
  );
}

export default News;
