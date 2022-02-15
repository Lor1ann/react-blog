import styles from "./Drawer.module.scss";
import React from "react";
import menu from "./img/menu.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { USER_LOGOUT } from "../../redux/actions/user";

const Drawer = function Drawer() {
  const dispatch = useDispatch();
  const [drawer, setDrawer] = React.useState(false);
  const user = useSelector((state) => state.user);
  const token = JSON.parse(localStorage.getItem("token"));
  function onLogout() {
    if (window.confirm("Вы точно хотите выйти?")) {
      dispatch(USER_LOGOUT());
      localStorage.removeItem("token");
      window.location.reload();
    }
  }

  return (
    <div className={styles.drawer} style={drawer ? { display: "flex" } : null}>
      {drawer ? (
        <div className={styles.wrapper} onClick={() => setDrawer(false)}></div>
      ) : null}
      <div
        className={styles.drawerOpener}
        onClick={() => {
          setDrawer(true);
        }}
        style={
          drawer
            ? { width: 400, justifyContent: "flex-start", alignItems: "start" }
            : null
        }
      >
        {!drawer ? (
          <div className={styles.menu}>
            <p className={styles.menuText}>МЕНЮ</p>
            <img className={styles.menuImg} src={menu} alt="" />
          </div>
        ) : !token ? (
          <div className={styles.menuOpened}>
            <ul className={styles.menuList}>
              <li className={styles.menuListElem}>
                <Link to={"/auth"} style={{ textDecoration: "none" }}>
                  <div>Войти</div>
                </Link>
              </li>
              <li className={styles.menuListElem}>
                <Link to={"/reg"} style={{ textDecoration: "none" }}>
                  <div>Зарегестрироватся</div>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles.menuOpened}>
            <div className={styles.user}>
              <h3>{user.fullName}</h3>
              <p>
                Дата регистрации:{" "}
                <span>
                  {new Date(user.createdAt).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
            <ul className={styles.menuList}>
              <li className={styles.menuListElem}>
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <div>Мой профиль</div>
                </Link>
              </li>
              <li className={styles.menuListElem}>
                <Link to={"/create"} style={{ textDecoration: "none" }}>
                  <div>Создать запись</div>
                </Link>
              </li>
              <li className={styles.menuListElem}>
                <div onClick={onLogout}>Выйти</div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
