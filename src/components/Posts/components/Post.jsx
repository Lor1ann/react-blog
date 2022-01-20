import styles from "./Post.module.scss";
import React from "react";

const Post = ({ title, views, text, date, photo }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        {!photo ? (
          <div className={styles.textContent} style={{ maxWidth: 700 }}>
            <h3 className={styles.postTitle}>{title}</h3>
            <p className={styles.postText}>{text}</p>
          </div>
        ) : (
          <div className={styles.textContent} style={{ maxWidth: 520 }}>
            <h3 className={styles.postTitle}>{title}</h3>
            <p className={styles.postText}>{text}</p>
          </div>
        )}
        {photo ? (
          <img
            className={styles.postPhoto}
            src={photo}
            alt=""
            width="165px"
            height="165px"
          />
        ) : null}
      </div>
      <div className={styles.postInfo}>
        <p>{date}</p>
        <div className={styles.postViews}>
          <p>{views}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
