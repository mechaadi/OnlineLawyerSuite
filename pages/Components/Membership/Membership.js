import React from 'react'
import styles from './membership.module.css'
const Membership = () => {
    return (     
            <div className={styles.membership}>
                <div className={styles.mem_left}>
                    <div className={styles.mem_content}>
                        Membership
                     </div>
                    <div className={styles.mem_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
                </div>
                <div className={styles.mem_right}>
                    <button className={styles.jointodaybutton}>Join Today</button>
                    <button className={styles.jointodaybutton}>Join Today</button>
                </div>

            </div>
    )
}
export default Membership
