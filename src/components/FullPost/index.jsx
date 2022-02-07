import React from "react";
import styles from "./FullPost.module.scss";
import { useSelector } from "react-redux";
import Comm from "../Comm";
import { useForm } from "react-hook-form";
import axios from "axios";

const FullPost = () => {
  const [comms, setComms] = React.useState(null);

  React.useEffect(() => {
    getComms();
  }, []);

  const token = JSON.parse(localStorage.getItem("token"));
  const { register, handleSubmit, reset } = useForm();

  const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

  const post = useSelector((state) =>
    state.posts.posts
      ? state.posts.posts.filter((obj) => obj._id === id)[0]
      : null
  );

  function getComms() {
    axios
      .get(`http://localhost:5656/comments/post/${id}`)
      .then(({ data }) => setComms({ data }.data))
      .catch((err) => console.log(err));
  }

  function onSubmit(data) {
    axios
      .post(
        "http://localhost:5656/comments",
        {
          text: data.text,
          postId: post._id,
        },
        { headers: { Authorization: token } }
      )
      .then(() => getComms())
      .catch((err) => console.log(err));
    reset();
  }

  return (
    post && (
      <div className={styles.mainpost}>
        <div
          className={styles.articleHeader}
          style={
            post.photoUrl
              ? {
                  background: ` linear-gradient(rgba(29, 29, 29, 0.6), rgba(29, 29, 29, 0.6)),
       url(${post.photoUrl})  center center no-repeat
         `,
                }
              : { background: `white`, color: "black" }
          }
        >
          <div className={styles.article}>
            <div className={styles.articleInfo}>
              <ul>
                <li>
                  <p>
                    {new Date(post.createdAt).toLocaleDateString("ru-RU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </p>
                </li>
              </ul>
            </div>
            <h2 className={styles.articleTitle}>{post.title}</h2>
            <h3>{post.description}</h3>
          </div>
        </div>
        <div className={styles.articleContent}>{post.text}</div>
        {token && (
          <div className={styles.comms}>
            <div className={styles.commsTitle}>
              <h3>Комментарии({comms && comms.length})</h3>
              {comms &&
                comms
                  .filter((obj) => obj.post === id)
                  .map((obj) => {
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
            <div className={styles.addComm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className={styles.addCommTitle}>Добавить комментарий</h3>
                <textarea
                  name="text"
                  cols="30"
                  rows="10"
                  {...register("text", { required: true })}
                />
                <button type="submit" className={styles.submitComm}>
                  Отправить
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default FullPost;
