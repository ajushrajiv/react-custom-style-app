import StandardBtn from "../../../common/buttons/standard-btn/StandardBtn";
import styles from "./NavbarRight.module.css";
import { useNavigate } from 'react-router-dom';

function NavbarRight() {
  const navigate = useNavigate();
  
  const handleClick = ()=>{
    navigate('/login');
  }

  return (
    <div className={styles.main}>
      <StandardBtn text={"login"} onclick={handleClick} />
      <div className={styles.leavespace}></div>
      <StandardBtn text={"signup"} />
    </div>
  );
}

export default NavbarRight;
