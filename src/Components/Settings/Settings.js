import styles from './settings.module.css';
const Settings = (props) => {
    return (
        <div className={styles.some_box}>

        <div className={styles.box}>
            <div className={styles.img_cont}>
                    <img className={styles.imgabc} src={props.img}/>
            </div>
            <div className={styles.desc}>
                {props.describe}
        </div>
            <div className={styles.img_cont}>
                <img className={styles.imgabc} src="https://cdn.discordapp.com/attachments/715197944202002584/717012311784554577/icons8-chevron-right-60.png" />
            </div>
        </div>

    </div>

    )
}

export default Settings
