import { Link } from "react-router-dom";
import styles from "./NavbarLeft.module.css"
import { TfiHome } from "react-icons/tfi";

function NavbarLeft(){
    return(
        <div className={styles.main}>
            <Link to="/">
                <h4><TfiHome />style</h4>
            </Link>    
        </div>
    );
}

export default NavbarLeft;