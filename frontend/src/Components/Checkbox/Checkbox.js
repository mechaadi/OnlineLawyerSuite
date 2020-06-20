import React from 'react'
import styles from './checkbox.module.css';
const Checkbox = (props) => {
    return (
        <div className={styles.lawyer_filter_box_check_box_container}>
            <input type="checkbox" className={styles.checkbox} />
            <div className={styles.checkbox_text}>
                {props.checkbox}
            </div>
        </div>
    )
}

export default Checkbox
