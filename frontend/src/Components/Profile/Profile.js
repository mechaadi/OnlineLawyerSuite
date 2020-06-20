/* eslint-disable jsx-a11y/alt-text */
import styles from './profile.module.css'
import React from 'react'
const Profile = (props) => {
    return (
        <div className={styles.lawyer_profile_container}>
            <div className={styles.lawyer_profile_picture_container}>
                <img alt="" src={props.image} className={styles.lawyer_profile_picture} />
            </div>
            <div className={styles.lawyer_profile_name}>
                {props.name}
            </div>
            <div className={styles.lawyer_profile_category}>
                {props.type}
            </div>
            <div className={styles.lawyer_profile_about_lawyer}>
                {props.about}
            </div>
        </div>
    )
}

export default Profile
