import React from "react";
import styles from "./Comm.module.scss";
const Comm = ({ text, username, createdAt, onDelete, id }) => {
  return (
    <div className={styles.comm}>
      <div className={styles.commInfo}>
        <p className={styles.commUser}>{username}</p>
        <p className={styles.commCreatedAt}>{createdAt}</p>
      </div>
      <div className={styles.commText}>{text}</div>
      {window.location.pathname === "/profile" && (
        <span className={styles.commDelete} onClick={() => onDelete(id)}>
          Удалить
        </span>
      )}
    </div>
  );
};

export default Comm;
