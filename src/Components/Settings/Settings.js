import styles from './settings.module.css';
import { useState } from 'react';
const Settings = (props) => {

    const [state, setstate] = useState(false);

    const hoverHandle = () => {
        setstate(!state);
        props.hoverData(state);
    }
    
    return (
        <div className={styles.settings_menu_container}>

        <div onMouseEnter = {hoverHandle} onMouseLeave = {hoverHandle} className={styles.settings_menu}>
            <div className={styles.img_container}>
                    <img className={styles.img_arrow} src={props.img}/>
            </div>
            <div className={styles.desc}>
                {props.describe}
        </div>
            <div className={styles.img_container}>
                    <img className={styles.img_arrow} src={props.Arrow} />
            </div>
        </div>

    </div>

    )
}

export default Settings
