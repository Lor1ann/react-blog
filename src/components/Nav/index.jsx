import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { TO_SEARCH } from "../../redux/actions/search";

const Nav = () => {
  const [search, setSearch] = React.useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.map((obj) => obj.searchValue));

  function searchValues(value) {
    dispatch(TO_SEARCH(value));
  }

  return (
    <nav className={styles.nav}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.navLogo}>EUGENE BLOG</div>
      </Link>
      <div className={styles.navEnd}>
        {search && (
          <TextField
            className={styles.search}
            label="Поиск"
            value={state}
            onChange={(e) => searchValues(e.target.value)}
          />
        )}
        <div className={styles.search}>
          <SearchIcon
            className={styles.searchIcon}
            onClick={() => setSearch(!search)}
          />
        </div>
        <div className={styles.user}>
          <Link to={"/Auth"} style={{ textDecoration: "none" }}>
            <AccountCircleIcon className={styles.userIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
