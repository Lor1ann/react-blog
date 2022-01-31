import React from "react";
import Layout from "../../components/Layout";
import styles from "./Create.module.scss";
import DownloadIcon from "@mui/icons-material/Download";
import "easymde/dist/easymde.min.css";
import Button from "@mui/material/Button";
import SimpleMdeReact from "react-simplemde-editor";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const autofocusNoSpellcheckerOptions = React.useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      autosave: {
        enabled: true,
        uniqueId: "22",
        text: "Autosaved: ",
      },
    };
  }, []);

  const [fields, setFields] = React.useState({
    description: "",
    title: "",
    text: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5656/posts", fields, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => navigate("/"))
      .then(() => window.location.reload())
      .catch((err) => console.log(err));

    setFields({
      description: "",
      title: "",
      text: "",
    });
  }

  return (
    <div className={styles.createFlex}>
      <div className={styles.create}>
        <form id="create" onSubmit={onSubmit}>
          <input
            value={fields.title}
            onChange={(e) => setFields({ ...fields, title: e.target.value })}
            className={styles.title}
            type="text"
            placeholder="Введите заголовок..."
          />
          <div className={styles.description}>
            <p>Короткое описание</p>
            <textarea
              form="create"
              value={fields.text}
              onChange={(e) => setFields({ ...fields, text: e.target.value })}
            />
          </div>
          <div className={styles.loader}>
            <div className={styles.loaderText}>
              <p>Ссылка на изображение:</p>
              <textarea />
            </div>
            <Button variant="contained" endIcon={<DownloadIcon />}>
              Загрузить
            </Button>
          </div>
          <div className={styles.fullDescription}>
            <p>Полное описание</p>
            <SimpleMdeReact
              options={autofocusNoSpellcheckerOptions}
              value={fields.description}
              onChange={(value) => setFields({ ...fields, description: value })}
            />
          </div>
          <div className={styles.toPost}>
            <Button type="submit" variant="contained" size="medium">
              Опубликовать
            </Button>
          </div>
        </form>
      </div>
      <Layout />
    </div>
  );
};

export default Create;
