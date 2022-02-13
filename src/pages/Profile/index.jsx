import React from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "../../components/Posts";
import { instance } from "../../axios";
import Comm from "../../components/Comm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Profile = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [comms, setComms] = React.useState(null);
  const [posts, setPosts] = React.useState(null);
  const user = useSelector((state) => state.user);
  const [active, setActive] = React.useState({ posts: true, comms: false });
  const [commsPage, setCommsPage] = React.useState(1);
  const [postsPage, setPostsPage] = React.useState(1);
  const [totalCommsPages, setTotalCommsPages] = React.useState(0);
  const [totalPostPages, setTotalPostPages] = React.useState(0);

  async function getComms() {
    try {
      const data = await (
        await instance.get(`/comments?limit=5&page=${commsPage}`)
      ).data;
      const dataComms = await data.items;
<<<<<<< HEAD
      const total = data.items.filter(
        (obj) => obj.user._id === user._id
      ).length;
      setTotalCommsPages(Math.ceil(total / 5));
=======
      console.log(dataComms);
      setTotalCommsPages(Math.ceil(data.total / 5));
>>>>>>> fb26fd75610eed98d364d6b44259e98e0ffbb2ac

      setComms(dataComms.filter((obj) => obj.user._id === user._id));
    } catch (e) {
      console.error(e);
    }
  }

  async function getPosts() {
    try {
      const data = await (
        await instance.get(`/posts?limit=5&page=${postsPage}`)
      ).data;

      const dataPosts = await data.items;
<<<<<<< HEAD
      const total = data.items.filter(
        (obj) => obj.user._id === user._id
      ).length;
      setTotalPostPages(Math.ceil(total / 5));
=======

      setTotalPostPages(Math.ceil(dataPosts.length / 5));
>>>>>>> fb26fd75610eed98d364d6b44259e98e0ffbb2ac
      setPosts(dataPosts.filter((obj) => obj.user._id === user._id));
    } catch (e) {
      console.error(e);
    }
  }

  async function onDeleteComm(id) {
    const res = window.confirm("Вы точно хотите удалить комментарий?");
    if (res) {
      try {
        await instance.delete(`/comments/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        getComms();
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function onDeletePost(id) {
    const res = window.confirm("Вы точно хотите удалить пост?");
    if (res) {
      try {
        await instance.delete(`/posts/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        getPosts();
      } catch (error) {
        console.error(error);
      }
    }
  }

  React.useEffect(() => {
    getPosts();
  }, [user, postsPage]);

  React.useEffect(() => {
    getComms();
  }, [user, commsPage]);

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
              {posts.map((obj) => {
                return (
                  <Post
                    key={obj._id}
                    onDelete={onDeletePost}
                    id={obj._id}
                    title={obj.title}
                    date={new Date(obj.createdAt)}
                    text={obj.description}
                    photo={obj.photoUrl}
                    views={obj.views}
                  />
                );
              })}
              {posts.length !== 0 && (
                <div className={styles.pagination}>
                  <div className={styles.buttons}>
                    <button
                      disabled={postsPage === 1}
                      type="button"
                      onClick={() => {
                        setPostsPage((prev) => prev - 1);
                      }}
                    >
                      <ArrowBackIcon />
                    </button>
                    <button
                      disabled={postsPage === totalPostPages}
                      type="button"
                      onClick={() => {
                        setPostsPage((prev) => prev + 1);
                      }}
                    >
                      <ArrowForwardIcon />
                    </button>
                  </div>
                  <p>{`Cтраница ${postsPage} из ${totalPostPages}`}</p>
                </div>
              )}
            </div>
          )}

          {active.comms && (
            <div className={styles.comments}>
              {comms.map((obj) => {
                return (
                  <Comm
                    id={obj._id}
                    key={obj._id}
                    onDelete={onDeleteComm}
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

              {comms.length !== 0 && (
                <div className={styles.pagination}>
                  <div className={styles.buttons}>
                    <button
                      disabled={commsPage === 1}
                      type="button"
                      onClick={() => {
                        setCommsPage((prev) => prev - 1);
                      }}
                    >
                      <ArrowBackIcon />
                    </button>
                    <button
                      disabled={commsPage === totalCommsPages}
                      type="button"
                      onClick={() => {
                        setCommsPage((prev) => prev + 1);
                      }}
                    >
                      <ArrowForwardIcon />
                    </button>
                  </div>
                  <p>{`Cтраница ${commsPage} из ${totalCommsPages}`}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
