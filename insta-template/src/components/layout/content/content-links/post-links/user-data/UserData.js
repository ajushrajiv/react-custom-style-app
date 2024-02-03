import StandardLabel from "../../../../../common/labels/standardlabel/StandardLabel"; 
import AppData from "../../../../../../utilities/AppData";
import styles from "./UserData.module.css"

function UserData(){
    return(
        <div className={styles.maincontainer}>
             <img className={styles.imglogo} src = {AppData.avatar} alt="logo"/>
            <StandardLabel text={`${AppData.username}`}/>
            <StandardLabel text={`${AppData.message}`}/>    
        </div>
    );
}

export default UserData;