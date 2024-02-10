import AppData from "../../../../utilities/AppData";
import StandardLabel from "../../../common/labels/standardlabel/StandardLabel";
import styles from "./UserPost.module.css";

function UserPost(){
    return(
        <div className={styles.maincontainer}>
            <img className={styles.imglogo} src = {AppData.avatar} alt="logo"/>
            <StandardLabel text={`${AppData.username}`}/>
            <StandardLabel text={`${AppData.message}`}/>    
        </div>
    )
}

export default UserPost;