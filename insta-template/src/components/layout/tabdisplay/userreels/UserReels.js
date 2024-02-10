import styles from "./UserReels.module.css"
import image3 from "./image3.jpg";

function UserReels(){
    const reels = [image3,image3,
        image3,image3,
        image3,image3]

    return(
        <div className={styles.imgstyle}>
            {reels.map(function(reel,index){
                return<img src={reel} key={index} alt=""/>
            })}
        </div>
    
    );
}

export default UserReels;