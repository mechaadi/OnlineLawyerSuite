import React, { useEffect, useState } from "react";
import styles from "./css/posts.module.css";
import Nav from "../Components/Navbar/Navbar";
import Button from "../Components/Buttons/Button";

export default function Posts() {
  const [postModal, setPostModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const handleToggleModal = () => {
    setPostModal(!postModal);
  };

  const handleTitleChange = () => {};

  const handleDescriptionChange = () => {};

  const handlePostSave = () => {};

  return (
    <div>
      {postModal && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#000000aa",
            margin: "auto",
            zIndex: 2000,
            top: 0
          }}
        >
          <div
            style={{
              height: 500,
              width: 500,
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "2px 2px 4px black",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <div>
                <h1>New Post</h1>
              </div>
              <div>
                <h1 onClick={handleToggleModal} style={{ cursor: "pointer" }}>
                  &#10006;
                </h1>
              </div>
            </div>
            <div style={{ padding: "10px", width: "100%" }}>
              <input
                onChange={handleTitleChange}
                placeholder="Post title"
                style={{ padding: "10px", width: "100%" }}
              ></input>
            </div>
            <div style={{ padding: "10px", width: "100%" }}>
              <textarea
                onChange={handleDescriptionChange}
                placeholder="Post Body"
                style={{ padding: "10px", width: "100%", height: 200 }}
              ></textarea>
            </div>

            <div
              style={{
                padding: "10px",
                width: "95%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button function={handlePostSave} name="Send"></Button>
            </div>
          </div>
        </div>
      )}
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
        <div onClick={handleToggleModal} className={styles.postIcon}>
          <h1>+</h1>
        </div>
      </div>
    </div>
  );
}
