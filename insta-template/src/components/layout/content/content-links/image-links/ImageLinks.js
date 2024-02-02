import StandardBtn from "../../../../common/buttons/standard-btn/StandardBtn";
import styles from "./ImageLinks.module.css"
import image2 from "./image2.jpg"
import React, {useState} from 'react'

function ImageLinks(){

    const [showImages, setShowImages] = useState(false);

    const images = [image2,image2,
        image2,image2,
        image2,image2]


    return(
        <div>
            <StandardBtn text={"Reels"} onclick={() => setShowImages(!showImages)}>
                {showImages ? 'Hide Images' : 'Reels'}
            </StandardBtn >

            {showImages && (
                <div className={styles.imgstyle}>
                    {images.map(function(image,index){
                        return<img src={image} key={index} alt=""/>
                    })}
                </div>
            )}
        </div>
    );
}

export default ImageLinks;