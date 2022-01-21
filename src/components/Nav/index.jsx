import React from "react";
import styles from "./Nav.module.scss";
import search from "./img/search.svg";
import user from "./img/user.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.navLogo}>EUGENE BLOG</div>
      </Link>
      <div className={styles.navEnd}>
        <div className={styles.search}>
          <img src={search} alt="search" />
        </div>
        <div className={styles.user}>
          <img src={user} alt="user" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
