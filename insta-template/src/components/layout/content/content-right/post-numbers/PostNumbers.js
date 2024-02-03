import StandardLabel from "../../../../common/labels/standardlabel/StandardLabel";
import styles from "./PostNumbers.module.css";
import PostCount from "./post-count/PostCount";

function PostNumbers() {
  return (
    <div className={styles.main}>
      <PostCount btnname={"posts"}/>
      <div className={styles.leavespace}></div>
      <PostCount btnname={"followers"}/>
      <div className={styles.leavespace}></div>
      <PostCount btnname={"following"}/>
    </div>
  );
}

export default PostNumbers;