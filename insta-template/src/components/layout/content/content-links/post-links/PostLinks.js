import StandardBtn from "../../../../common/buttons/standard-btn/StandardBtn";
import UserData from "./user-data/UserData";

function PostLinks(){
    return(
        <div>
            <StandardBtn text={"POSTS"}  />
            <UserData />
        </div>
    );
}

export default PostLinks;