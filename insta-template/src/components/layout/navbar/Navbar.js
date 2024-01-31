import NavbarLeft from "./navbar-left/NavbarLeft";
import NavbarRight from "./navbar-right/NavbarRight";
import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <div className={styles.mainnavbar}>
            <div className={styles.leftnav}>
                <NavbarLeft />
            </div>
            <div className={styles.leavespace}></div>
            <div className={styles.leftnav}>
                <NavbarRight />
            </div>
        </div>    
    );
}

export default Navbar;