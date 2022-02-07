import React from "react";
import styles from "./Comm.module.scss";
const Comm = ({ text, username, createdAt }) => {
  return (
    <div className={styles.comm}>
      <div className={styles.commInfo}>
        <p className={styles.commUser}>{username}</p>
        <p className={styles.commCreatedAt}>{createdAt}</p>
      </div>
      <div className={styles.commText}>{text}</div>
    </div>
  );
};

export default Comm;
