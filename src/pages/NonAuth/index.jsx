import React from "react";
import styles from "./NonAuth.module.scss";
import { Link } from "react-router-dom";

const NonAuth = () => {
  return (
    <div className={styles.warning}>
      <Link
        className={styles.navLogo}
        to={"/"}
        style={{ textDecoration: "none" }}
      >
        <div>EUGENE BLOG</div>
      </Link>
      <h1 className={styles.warningTitle}>Вы не авторизированы!</h1>
      <p>
        <Link
          to={"/Auth"}
          className={styles.link}
          style={{ textDecoration: "none" }}
        >
          <span>Авторизируйтесь</span>
        </Link>{" "}
        или{" "}
        <Link
          to={"/Reg"}
          className={styles.link}
          style={{ textDecoration: "none" }}
        >
          <span>зарегестрируйтесь!</span>
        </Link>
      </p>
    </div>
  );
};

export default NonAuth;
