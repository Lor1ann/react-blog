import React from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "../../components/Posts";
import axios from "axios";
import Comm from "../../components/Comm";

const Profile = () => {
  const [comms, setComms] = React.useState(null);
  const user = useSelector((state) => state.user);
  const [active, setActive] = React.useState({ posts: true, comms: false });
  const posts = useSelector((state) => state.posts.posts);

  async function getComms() {
    try {
      const data = await (
        await axios.get(`http://localhost:5656/comments/`)
      ).data;
      const dataComms = await data.items;

      setComms(dataComms);
    } catch (e) {
      console.error(e);
    }
  }

  console.log(comms);

  React.useEffect(() => {
    getComms();
  }, []);

  return (
    <div className={styles.root}>
      {posts && user && (
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
                  ? {
                      color: "#36B55A",
                      background: "rgba(64, 210, 105, 0.08)",
                    }
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
              {posts
                .filter((obj) => obj.user._id === user._id)
                .map((obj) => {
                  return (
                    <Link
                      key={obj._id}
                      to={`/post/${obj._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Post
                        title={obj.title}
                        date={new Date(obj.createdAt)}
                        text={obj.description}
                        photo={obj.photoUrl}
                        views={obj.views}
                      />
                    </Link>
                  );
                })}
            </div>
          )}

          {active.comms && (
            <div className={styles.comments}>
              {comms
                .filter((obj) => obj.user._id === user._id)
                .map((obj) => {
                  console.log(obj);
                  return (
                    <Comm
                      key={obj._id}
                      text={obj.text}
                      username={obj.user.fullName}
                      createdAt={new Date(obj.createdAt).toLocaleDateString(
                        "ru-RU",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        }
                      )}
                    />
                  );
                })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
