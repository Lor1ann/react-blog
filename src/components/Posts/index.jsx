import React from "react";
import style from "./Posts.module.scss";
import search from "./img/search.svg";
import user from "./img/user.svg";
import Post from "./components/Post.jsx";

const SidePosts = () => {
  return (
    <div className={style.posts}>
      <nav>
        <div className={style.navLogo}>EUGENE BLOG</div>
        <div className={style.navEnd}>
          <div className={style.search}>
            <img src={search} alt="search" />
          </div>
          <div className={style.user}>
            <img src={user} alt="user" />
          </div>
        </div>
      </nav>
      <div className="posts-flex">
        <Post />
      </div>
    </div>
  );
};

export default SidePosts;
