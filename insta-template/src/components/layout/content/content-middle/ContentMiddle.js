import styles from "./ContentMiddle.module.css"
import image2 from "./image2.jpg"


const images = [image2,image2,
                image2,image2,
                image2,image2]

function ContentMiddle(){
    return(
        <div className={styles.imgstyle}>
            {images.map(function(image,index){
                <p>asdf</p>
                return<img src={image} key={index} alt=""/>
            })}
        </div>
    );
}

export default ContentMiddle;