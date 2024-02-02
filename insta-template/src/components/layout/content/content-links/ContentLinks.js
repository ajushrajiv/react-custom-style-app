import StandardBtn from "../../../common/buttons/standard-btn/StandardBtn";
import styles from "./ContentLinks.module.css";
import ImageLinks from "./image-links/ImageLinks";

function ContentLinks() {
  return (
    <div className={styles.main}>
      {/*<StandardBtn text={"POSTS"} />
      <StandardBtn text={"REELS"} />
      <StandardBtn text={"TAGGED"} />*/}
      <ImageLinks></ImageLinks>
    </div>
  );
}

export default ContentLinks;
