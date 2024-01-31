import styles from "./ContentRight.module.css"
import ContentFollow from "./content-follow/ContentFollow";
import PostNumbers from "./post-numbers/PostNumbers";

function ContentRight(){
    return(
        <div>
            <div className={styles.templateDescription}>

                <div className={styles.topic}>
                    <h4>organizeURspace</h4>
                </div>

                <div className={styles.subdescription}>
                    <ContentFollow />
                </div>   

                <div className={styles.followLabel}>
                    <PostNumbers />
                </div> 

                <div className={styles.textContent}>
                    <p>home decor</p>
                    <p>design ideas</p>
                    <p>lifestyle</p>
                </div> 

            </div>
        </div>
    );
}

export default ContentRight;