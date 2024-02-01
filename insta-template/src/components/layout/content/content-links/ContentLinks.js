import StandardBtn from "../../../common/buttons/standard-btn/StandardBtn";
import styles from "./ContentLinks.module.css";

function ContentLinks() {
  return (
    <div className={styles.main}>
      <StandardBtn text={"POSTS"} />
      <StandardBtn text={"REELS"} />
      <StandardBtn text={"TAGGED"} />
    </div>
  );
}

export default ContentLinks;
