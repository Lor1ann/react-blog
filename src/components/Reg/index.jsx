import React from "react";
import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reg = () => {
  let nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5656/auth/register", data)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        nav("/");
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
          <h2 className={styles.loginTitle}>Регистрация</h2>
          <Link
            to={"/"}
            className={styles.link}
            style={{ textDecoration: "none" }}
          >
            <CloseIcon className={styles.loginClose} />
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.name}>
            <TextField
              className={styles.nameField}
              label="Имя и фамилия"
              variant="standard"
              error={!!errors.fullName}
              {...register("fullName", {
                pattern: {
                  value:
                    /(-?([A-Z].\s)?([A-Z][a-z]+)\s?)+([A-Z]'([A-Z][a-z]+))?/g,
                  message: "Это неверные имя и фамилия!",
                },
              })}
              helperText={errors.fullName && errors.fullName.message}
              required
            />
          </div>
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

export default Reg;
