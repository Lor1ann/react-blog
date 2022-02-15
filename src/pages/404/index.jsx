import React from "react";
import { Link } from "react-router-dom";
import styles from "./Err404.module.scss";

const Err404 = () => {
  return (
    <div className={styles.warning}>
      <Link
        className={styles.navLogo}
        to={"/"}
        style={{ textDecoration: "none" }}
      >
        <div>EUGENE BLOG</div>
      </Link>
      <h1 className={styles.warningTitle}>Такая страница не найдена!</h1>
      <h2>Error 404</h2>
    </div>
  );
};

export default Err404;
