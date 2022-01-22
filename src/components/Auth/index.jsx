import React from "react";
import styles from "./Auth.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.login}>
          <h2 className={styles.loginTitle}>Вход в аккаунт</h2>
          <Link
            to={"/"}
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            <CloseIcon className={styles.loginClose} />
          </Link>
        </div>
        <form action="">
          <div className={styles.email}>
            <p>Email</p>
            <input type="text" placeholder="Введите почту..." />
          </div>
          <div className={styles.password}>
            <p>Пароль</p>
            <input type="password" placeholder="Введите пароль..." />
          </div>
          <button type="submit" className={styles.button}>
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
