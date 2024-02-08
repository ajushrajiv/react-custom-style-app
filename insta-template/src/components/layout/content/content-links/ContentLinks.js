import styles from "./ContentLinks.module.css";
import ImageLinks from "./image-links/ImageLinks";
import PostLinks from "./post-links/PostLinks";

function ContentLinks() {
  
  return (
    <div className={styles.main}>
      <ImageLinks />
    </div>
  );
}

export default ContentLinks;
