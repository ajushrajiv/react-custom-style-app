import ContentLeft from "./content-left/ContentLeft";
import styles from "./Content.module.css"
import ContentRight from "./content-right/ContentRight";

function Content(){
    return(
        <div>
            <div className={styles.maindiv}>
                <div className={styles.maincontentleft}>
                    
                    <ContentLeft /> 
                </div>

                <div className={styles.leavespace}></div>

                <div className={styles.maincontentleft}>
                    <ContentRight /> 
                </div>
            </div>  

            <div className={styles.leavespace}></div>
        </div>  
    );
}

export default Content;