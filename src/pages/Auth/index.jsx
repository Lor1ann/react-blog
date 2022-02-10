import React from "react";
import styles from "./Auth.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { instance } from "../../axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_USER_DATA } from "../../redux/actions/user";

const Auth = () => {
  const dispatch = useDispatch();

  function setUsersData(data) {
    dispatch(SET_USER_DATA(data));
  }

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    instance
      .post("/auth/login", data)
      .then(({ data }) => {
        setUsersData(data);
        if (data.hasOwnProperty("token")) {
          localStorage.setItem("token", JSON.stringify(data.token));
        }
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.email}>
            <TextField
              className={styles.emailField}
              label="Почта"
              variant="standard"
              error={!!errors.email}
              {...register("email", {
                pattern: {
                  value:
                    /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
                  message: "Это неверная почта!",
                },
              })}
              helperText={errors.email && errors.email.message}
              required
            />
          </div>
          <div className={styles.password}>
            <TextField
              type="password"
              className={styles.passwordField}
              label="Пароль"
              error={!!errors.password}
              variant="standard"
              {...register("password", {
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Это неверный пароль!",
                },
              })}
              required
              helperText={errors.password && errors.password.message}
            />
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
