import React, { useEffect, useState } from "react";
import styles from "./css/posts.module.css";
import Nav from "../Components/Navbar/Navbar";
import Button from "../Components/Buttons/Button";
import { addPost, getAllPosts } from "../api/posts";
import { uploadPostPic, getProfilePicture } from "../api/file";

export default function Posts() {
  const [postModal, setPostModal] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const postList = await getAllPosts();
      setPosts(postList.data);
    }

    getPosts();
  }, []);

  const handleToggleModal = () => {
    setPostModal(!postModal);
  };

  const handleTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setPostDescription(e.target.value);
  };

  const imageUploadHandler = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePostSave = async () => {
    const doc = document.getElementById("profilePic");
    const imageResp = await uploadPostPic(doc.files[0]);
    console.log(imageResp.data[0]);

    await addPost(postTitle, postDescription, imageResp.data[0].unique_id);
    handleToggleModal();
    const postList = await getAllPosts();
    setPosts(postList.data);
  };

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
            top: 0,
          }}
        >
          <div
            style={{
              height: 600,
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
            <div style={{ paddingLeft: "10px", width: "100%" }}>
              <img
                alt=""
                style={{ height: 60, width: 60 }}
                src={postImage}
              ></img>
            </div>
            <div
              class="image-upload"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <label for="profilePic">
                <img
                  src="https://goo.gl/pB9rpQ"
                  style={{ width: 40, cursor: "pointer" }}
                />
              </label>
              <input
                style={{ display: "none" }}
                onChange={imageUploadHandler}
                id="profilePic"
                type="file"
              />
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
          {posts.map((post) => (
            <div className={styles.postCard}>
              <div className={styles.postData}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </div>
              <img
                className={styles.postImage}
                src={`${process.env.REACT_APP_API_URL}/files/${post.images}`}
              ></img>
            </div>
          ))}
        </div>
        <div onClick={handleToggleModal} className={styles.postIcon}>
          <h1>+</h1>
        </div>
      </div>
    </div>
  );
}
