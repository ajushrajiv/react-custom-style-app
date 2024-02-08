import StandardBtn from "../../../../common/buttons/standard-btn/StandardBtn";
import PostLinks from "../post-links/PostLinks";
import styles from "./ImageLinks.module.css"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import React, {useState} from 'react'

function ImageLinks(){

    const [showReels, setShowReels] = useState(true);
    const [showTags, setShowTags] = useState(true);


    const reels = [image2,image2,
        image2,image2,
        image2,image2]

    const tags = [image3,image3,
        image3,image3,
        image3,image3]


    return(
        <div className="main">
                <StandardBtn text={"REELS"} onclick={() => setShowReels(!showReels)&&setShowTags(showTags)}>
                    {showReels ? 'Hide Reels' : 'showReels'}
                </StandardBtn >

                <StandardBtn text={"TAGS"} onclick={() => setShowTags(!showTags)&&setShowReels(showReels)}>
                    {showTags ? 'Hide Tags' : 'showTags'}
                </StandardBtn >

                <PostLinks />

            {showReels && (
                <div className={styles.imgstyle}>
                    {reels.map(function(reel,index){
                        return<img src={reel} key={index} alt=""/>
                    })}
                </div>
            )}

            {showTags && (
                <div className={styles.imgstyle}>
                    {tags.map(function(pag,index){
                        return<img src={pag} key={index} alt=""/>
                    })}
                </div>
            )}

        </div>
    );
}

export default ImageLinks;