import styles from "./StandardBtn.module.css"

function StandardBtn({onclick,style,text}){
    return(
        <div className={styles.btn} style={style} onClick={onclick}>
            {text}
        </div>
    );
}

export default StandardBtn;