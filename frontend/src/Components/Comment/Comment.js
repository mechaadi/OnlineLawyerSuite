import styles from './comment.module.css'
import React from 'react';
const Comment = (props) => {
    return (
        <div className={styles.lawyer_reviews_container}>

        <div className={styles.lawyer_reviews_profile_pic}>
            <img className={styles.lawyer_reviews_image} src="https://cdn.discordapp.com/attachments/715197944202002584/715890541312868492/Gabriel-Macht-as-Harvey-Specter-copy-5-copy.jpg" />
        </div>

        <div>
            <div style={{ display: "flex" }}>
                <div className={styles.lawyer_reviews_username}>
                    {props.username}
                </div>
                <div style={{ fontSize: 15, marginLeft: 10, color: "grey", marginTop: 8 }}>
                    {props.timestamp}
                </div>
            </div>
            <div className={styles.lawyer_reviews_username_rating}>
                {props.stars}
            </div>
            <div className={styles.lawyer_reviews_username_comment}>
                {props.review}
            </div>
        </div>
    </div>
    )
}

export default Comment
