import React from 'react'
import styles from './chips.module.css';
const Chips = (props) => {
    return (
        <div className={styles.filter_selected}>
            {props.name}

            <div className={styles.image_container}>
                <img src="https://cdn.discordapp.com/attachments/715197944202002584/716518689427685397/image-x-png-7.png" className={styles.image} />

            </div>
        </div>
    )
}

export default Chips
