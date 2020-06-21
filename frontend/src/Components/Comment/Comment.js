/* eslint-disable jsx-a11y/alt-text */
import styles from "./comment.module.css";
import React from "react";
const Comment = (props) => {
  var starsArr = [];
  for (let i = 0; i < props.stars; i++) {
    starsArr.push(<div style={{display: 'inline-block'}}>⭐</div>);
  }


  return (
    <div className={styles.lawyer_reviews_container}>
      <div className={styles.lawyer_reviews_profile_pic}>
        <img className={styles.lawyer_reviews_image} src={props.image} />
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <div className={styles.lawyer_reviews_username}>{props.username}</div>
          <div
            style={{
              fontSize: 15,
              marginLeft: 10,
              color: "grey",
              marginTop: 8,
            }}
          >
            {props.timestamp}
          </div>
        </div>
        <div className={styles.lawyer_reviews_username_rating}>{starsArr}</div>
        <div className={styles.lawyer_reviews_username_comment}>
          {props.review}
        </div>
      </div>
    </div>
  );
};

export default Comment;
