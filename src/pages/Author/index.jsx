import React from "react";
import style from "./Author.module.scss";
import authorImage from "./img/author.png";
import Layout from "../../components/Layout";

export const Author = (props) => {
  return (
    <div className={style.authorFlex}>
      <div className={style.author}>
        <h1 className={style.title}>Eugene Pechkurov</h1>
        <h2 className={style.subtitle}>Блог фронтенд-разработчика</h2>
        <img className={style.authorImage} src={authorImage} alt="author" />
        <div className={style.about}>
          <h3>Обо мне</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
            fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
            scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis
            quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque,
            nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt
            laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet
            phasellus malesuada non nisi.
          </p>
        </div>
      </div>
      <Layout />
    </div>
  );
};
