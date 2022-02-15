import React from "react";
import styles from "./Reg.module.scss";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { instance } from "../../axios";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Это обязательное поле")
    .min(4, "Слишком короткие имя и фамилия")
    .max(50, "Слишком длинные имя и фамилия"),
  email: yup
    .string()
    .min(6, "Слишком короткая почта")
    .max(32, "Слишком длинная почта")
    .email("Неверная почта")
    .required("Это обязательное поле")
    .trim(),
  password: yup
    .string()
    .required("Это обязательное поле")
    .min(5, "Слишком короткий пароль")
    .max(32, "Неверный пароль неверный")
    .trim(),
});

const Reg = () => {
  let nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    instance
      .post("/auth/register", data)
      .then(({ data }) => {
        if (data.hasOwnProperty("token")) {
          localStorage.setItem("token", JSON.stringify(data.token));
        }
        nav("/");
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
              {...register("fullName")}
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
              {...register("email")}
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
                  message: "Это невалидный пароль!",
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
