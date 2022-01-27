import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { TO_SEARCH } from "../../redux/actions/search";
import PostAddIcon from "@mui/icons-material/PostAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { USER_LOGOUT } from "../../redux/actions/user";

const Nav = () => {
  const [search, setSearch] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search.searchValue);
  const user = useSelector((state) => state.user);
  function searchValues(value) {
    dispatch(TO_SEARCH(value));
  }

  function onLogout() {
    if (window.confirm("Вы точно хотите выйти?")) {
      dispatch(USER_LOGOUT());
      localStorage.removeItem("token");
      window.location.reload();
    }
  }

  return (
    <nav className={styles.nav}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className={styles.navLogo}>EUGENE BLOG</div>
      </Link>
      <div className={styles.navEnd}>
        {search && (
          <TextField
            className={styles.searchInput}
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
        {user.fullName ? (
          <>
            <div className={styles.add}>
              <Link to={"/create"} style={{ textDecoration: "none" }}>
                <PostAddIcon className={styles.addIcon} />
              </Link>
            </div>
            <div className={styles.logout}>
              <LogoutIcon className={styles.logoutIcon} onClick={onLogout} />
            </div>
          </>
        ) : (
          <div className={styles.user}>
            <Link to={"/Auth"} style={{ textDecoration: "none" }}>
              <AccountCircleIcon className={styles.userIcon} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
