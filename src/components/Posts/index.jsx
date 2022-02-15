import styles from "./Post.module.scss";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const Post = ({ title, views, text, date, photo, id, onDelete }) => {
  return (
    <div className={styles.post}>
      <Link to={`/posts/${id}`} style={{ textDecoration: "none" }}>
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
            <img className={styles.postPhoto} src={`${photo}`} alt="" />
          ) : null}
        </div>
      </Link>
      <div className={styles.postInfo}>
        <p>{date.toLocaleDateString("ru-RU")}</p>
        <div className={styles.postViews}>
          <div>
            <RemoveRedEyeIcon />
          </div>
          <div>{views}</div>
        </div>
        {window.location.pathname === "/profile" && (
          <>
            <span className={styles.postDelete} onClick={() => onDelete(id)}>
              Удалить
            </span>
            <Link
              to={`/edit/${id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className={styles.postEdit}>Редактировать</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
