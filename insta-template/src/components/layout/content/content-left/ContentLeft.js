import styles from "./ContentLeft.module.css"
import image1 from "./image1.jpg"

function ContentLeft(){
    return(
        <div>
            <img className={styles.imgstyle} src={image1} alt="logo"></img>
        </div>
    );
}

export default ContentLeft;