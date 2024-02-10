import styles from "./LoginForm.module.css";
import { CiLock} from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function LoginForm(){
    return(
        <div className={styles.formContainer}>
            <form action="">
                <h1>Login</h1>
                <div className={styles.inputBox}>
                    <CiUser className={styles.icon}/>
                    <input type="text" placeholder="Username" required />
                </div>

                <div className={styles.inputBox}>
                    <CiLock className={styles.icon}/>
                    <input type="password" placeholder="Password" required />
                </div>

                <div className={styles.remember}>
                    <label><input type="checkbox" />    
                        Remember me
                    </label>
                    <a href="#">Forgot password</a>    
                </div>

                <button type="submit">Login</button>

                <div className={styles.registerLink}>
                    <p>Don't have a account?<a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;