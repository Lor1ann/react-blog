import React from "react";
import styles from "./FullPost.module.scss";
import Layout from "../../components/Layout";

const FullPost = () => {
  return (
    <div className={styles.mainFlex}>
      <div className={styles.mainpost}>
        <div className={styles.articleHeader}>
          <div className={styles.article}>
            <div className={styles.articleInfo}>
              <ul>
                <li>
                  <p>12 АВГУСТА 2019 В 08:06</p>
                </li>
              </ul>
            </div>
            <h2 className={styles.articleTitle}>
              Какой-то очень интересный заголовок
            </h2>
            <h3>
              Я часто замечаю, что начинающие фронтенд-разработчики по несколько
              раз то начинают, то забрасывают изучение технологий.
            </h3>
          </div>
        </div>
        <div className={styles.articleContent}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque diam arcu risus. Imperdiet dolor, porttitor
              pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc
              suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed
              porta ac enim. Mattis quam accumsan ipsum commodo sed purus mi.
              Platea sit lectus neque, nulla sapien vitae nulla. Nisl viverra
              viverra quis mattis tincidunt laoreet amet, laoreet proin. Duis
              mi, aliquam tincidunt amet phasellus malesuada non nisi.
            </p>
          </div>
          <div className={styles.headings}>
            <h1>Заголовок H1</h1>
            <h2>Заголовок H2</h2>
            <h3>Заголовок H3</h3>
            <h4>Заголовок H4</h4>
            <h5>Заголовок H5</h5>
          </div>
        </div>
      </div>
      <Layout />
    </div>
  );
};

export default FullPost;
