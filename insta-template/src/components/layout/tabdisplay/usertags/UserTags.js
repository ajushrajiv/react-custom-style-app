import styles from "./UserTags.module.css";
import image2 from "./image2.jpg";

function UserTags(){

    const tags = [image2,image2,
        image2,image2,
        image2,image2]

    return(
        <div className={styles.imgstyle}>
            {tags.map(function(tag,index){
                return <img src={tag} key={index} alt=""/>
            })}
        </div>
    );
}

export default UserTags;