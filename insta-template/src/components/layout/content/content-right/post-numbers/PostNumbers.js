import StandardBtn from "../../../../common/buttons/standard-btn/StandardBtn";
import styles from "./PostNumbers.module.css";

function PostNumbers() {
  return (
    <div className={styles.main}>
      <StandardBtn text={"10 posts"} />
      <div className={styles.leavespace}></div>
      <StandardBtn text={"100 followers"} />
      <div className={styles.leavespace}></div>
      <StandardBtn text={"10 following"} />
    </div>
  );
}

export default PostNumbers;