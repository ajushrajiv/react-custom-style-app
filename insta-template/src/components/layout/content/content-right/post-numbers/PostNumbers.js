import StandardLabel from "../../../../common/labels/standardlabel/StandardLabel";
import styles from "./PostNumbers.module.css";

function PostNumbers() {
  return (
    <div className={styles.main}>
      <StandardLabel text={"10 posts"} />
      <div className={styles.leavespace}></div>
      <StandardLabel text={"100 followers"} />
      <div className={styles.leavespace}></div>
      <StandardLabel text={"10 following"} />
    </div>
  );
}

export default PostNumbers;