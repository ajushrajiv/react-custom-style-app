import StandardBtn from "../../../../common/buttons/standard-btn/StandardBtn";
import styles from "./ImageLinks.module.css"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import React, {useState} from 'react'

function ImageLinks(){

    const [showReels, setShowReels] = useState(true);
    const [showPosts, setShowPosts] = useState(true);


    const reels = [image2,image2,
        image2,image2,
        image2,image2]

    const posts = [image3,image3,
        image3,image3,
        image3,image3]


    return(
        <div>
            <StandardBtn text={"REELS"} onclick={() => setShowReels(!showReels)&&setShowPosts(showPosts)}>
                {showReels ? 'Hide Reels' : 'showReels'}
            </StandardBtn >
            <StandardBtn text={"POSTS"} onclick={() => setShowPosts(!showPosts)&&setShowReels(showReels)}>
                {showPosts ? 'Hide Posts' : 'showPosts'}
            </StandardBtn >

            {showReels && (
                <div className={styles.imgstyle}>
                    {reels.map(function(reel,index){
                        return<img src={reel} key={index} alt=""/>
                    })}
                </div>
            )}

            {showPosts && (
                <div className={styles.imgstyle}>
                    {posts.map(function(post,index){
                        return<img src={post} key={index} alt=""/>
                    })}
                </div>
            )}
        </div>
    );
}

export default ImageLinks;