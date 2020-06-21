import React, {useEffect, useState} from "react";
import styles from "./css/posts.module.css";
import Nav from "../Components/Navbar/Navbar";

export default function Posts() {
  return (
    <div>
      <div className={styles.navbarhandler}>
        <Nav />
      </div>
      <div className={styles.postsContainer}>
        <div className={styles.postRow}>
        <div className={styles.postCard}></div>
        <div className={styles.postCard}></div>
        <div className={styles.postCard}></div>
        <div className={styles.postCard}></div>
        <div className={styles.postCard}></div>
        <div className={styles.postCard}></div>
        </div>
      </div>
    </div>
  );
}
