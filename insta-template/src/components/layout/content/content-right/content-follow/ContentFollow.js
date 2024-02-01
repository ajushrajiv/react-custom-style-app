import StandardBtn from "../../../../common/buttons/standard-btn/StandardBtn";
import styles from "./ContentFollow.module.css";

function ContentFollow() {
  return (
    <div className={styles.main}>
      <StandardBtn text={"Follow"} />
      <div className={styles.leavespace}></div>
      <StandardBtn text={"Message"} />
      <div className={styles.leavespace}></div>
      <StandardBtn text={"..."} />
    </div>
  );
}

export default ContentFollow;
