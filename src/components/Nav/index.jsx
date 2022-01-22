import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.navLogo}>EUGENE BLOG</div>
      </Link>
      <div className={styles.navEnd}>
        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
        </div>
        <div className={styles.user}>
          <AccountCircleIcon className={styles.userIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
