import StandardBtn from "../../../common/buttons/standard-btn/StandardBtn";
import styles from "./NavbarRight.module.css";

function NavbarRight() {
  return (
    <div className={styles.main}>
      <StandardBtn text={"login"} />
      <div className={styles.leavespace}></div>
      <StandardBtn text={"signup"} />
    </div>
  );
}

export default NavbarRight;
