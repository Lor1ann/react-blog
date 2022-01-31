import React from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SidePosts from "../../components/SidePosts";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [active, setActive] = React.useState({ posts: true, comms: false });

  return (
    <div className={styles.root}>
      <div className={styles.profile}>
        <Link
          className={styles.link}
          to={"/"}
          style={{ textDecoration: "none" }}
        >
          <div className={styles.navLogo}>EUGENE BLOG</div>
        </Link>
        <div className={styles.profileTitle}>{user.fullName}</div>
        <div className={styles.regDate}>
          <p>
            Дата регистрации:{" "}
            {new Date(user.createdAt).toLocaleDateString("ru-RU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className={styles.filter}>
          <div
            className={styles.articles}
            onClick={() => setActive({ posts: true, comms: false })}
            style={
              active.posts
                ? { color: "#36B55A", background: "rgba(64, 210, 105, 0.08)" }
                : null
            }
          >
            Статьи
          </div>
          <div
            className={styles.comms}
            onClick={() => setActive({ posts: false, comms: true })}
            style={
              active.comms
                ? {
                    color: "#36B55A",
                    background: "rgba(64, 210, 105, 0.08) ",
                  }
                : null
            }
          >
            Комментарии
          </div>
        </div>
        {active.posts && (
          <div className={styles.posts}>
            <SidePosts />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
