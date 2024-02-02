import StandardLabel from "../../../../../common/labels/standardlabel/StandardLabel"; 
import AppData from "../../../../../../utilities/AppData";

function UserData(){
    return(
        <div>
            <StandardLabel text={`${AppData.username}`}/>
            <StandardLabel text={`${AppData.message}`}/>
        </div>
    );
}

export default UserData;