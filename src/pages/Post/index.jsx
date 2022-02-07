import React from "react";
import styles from "./Post.module.scss";
import Layout from "../../components/Layout";
import FullPost from "../../components/FullPost";

const Post = () => {
  const id =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];

  return (
    <div className={styles.mainFlex}>
      <FullPost key={id} />
      <Layout />
    </div>
  );
};

export default Post;
