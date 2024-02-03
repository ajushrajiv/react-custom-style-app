import { useState } from "react";
import StandardBtn from "../../../../../common/buttons/standard-btn/StandardBtn";

function PostCount({btnname}){
    const [count , setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return(
        <StandardBtn onclick={handleClick} text={`${count} ${btnname}`} />
    );
}

export default PostCount;