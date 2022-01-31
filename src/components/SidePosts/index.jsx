import React from "react";
import style from "./SidePosts.module.scss";
import Post from "./components/Post.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const posts = [];

const SidePosts = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const posts1 = useSelector((state) => state.posts.posts);

  return (
    <>
      {posts1 && (
        <div className={style.posts}>
          {posts1.map((obj) => {
            return (
              <Link
                key={obj.title}
                to={"/post"}
                style={{ textDecoration: "none" }}
              >
                <Post
                  title={obj.title}
                  text={obj.text}
                  photo={
                    "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
                  }
                  date={obj.date}
                  views={obj.views}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SidePosts;
