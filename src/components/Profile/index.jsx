import React from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div class="root">
      <div className={styles.profile}>
        <Link
          className={styles.link}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          <div className={styles.navLogo}>EUGENE BLOG</div>
        </Link>
        <div className={styles.profileTitle}>Евгений Печкуров</div>
        <div className={styles.regDate}>
          <p>
            Дата регистрации: <span>12 августа 2019 в 08:06</span>
          </p>
        </div>
        <div className={styles.filter}>
          <div className={styles.articles}>Статьи</div>
          <div className={styles.comms}>Комментарии</div>
        </div>
        <div className={styles.post}></div>
      </div>
    </div>
  );
};

export default Profile;
