import React from "react";
import Layout from "../../components/Layout";
import styles from "./Edit.module.scss";
import "easymde/dist/easymde.min.css";
import Button from "@mui/material/Button";
import SimpleMdeReact from "react-simplemde-editor";
import { instance } from "../../axios";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const id = window.location.pathname.split("/")[2];

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

  const [filename, setFilename] = React.useState("");
  const [upload, setUpload] = React.useState(true);
  const [fields, setFields] = React.useState({
    description: "",
    title: "",
    text: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getPost() {
      try {
        const data = await instance.get(`/posts/${id}`);
        const post = data.data;
        console.log(post);
        if (post.photoUrl) {
          setFields({
            description: post.description,
            title: post.title,
            text: post.text,
            photoUrl: post.photoUrl,
          });
        } else {
          setFields({
            description: post.description,
            title: post.title,
            text: post.text,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    getPost();
  }, [id]);

  function onSelect(e) {
    setUpload(false);
    setFilename(
      e.target.value.split(`\\`)[e.target.value.split(`\\`).length - 1]
    );
  }

  const inputFile = React.useRef();

  async function fileUpload() {
    const file = inputFile.current.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setUpload(true);
    setFilename(file.name);
    await instance
      .post("/posts/upload", formData, {
        header: { "Content-type": "multipart/form-data" },
      })
      .then((res) =>
        setFields({
          ...fields,
          photoUrl: `${res.data.url}`,
        })
      )
      .catch((err) => console.error(err));
  }

  async function onSubmit(e) {
    e.preventDefault();

    await instance
      .patch(`/posts/${id}`, fields, {
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
              value={fields.description}
              onChange={(e) =>
                setFields({ ...fields, description: e.target.value })
              }
            />
          </div>
          <div className={styles.loader}>
            <div className={styles.loaderText}>
              <textarea
                value={fields.photoUrl ? fields.photoUrl.split("/")[2] : null}
              />
              <label htmlFor="inputFile">
                <input
                  id="inputFile"
                  style={{ display: "none" }}
                  multiple
                  type="file"
                  ref={inputFile}
                  onChange={onSelect}
                />

                <Button
                  className={styles.upload}
                  type="button"
                  variant="contained"
                  component="span"
                >
                  Выберите файл
                </Button>
              </label>
            </div>

            <Button
              className={styles.upload}
              type="button"
              variant="contained"
              component="span"
              onClick={fileUpload}
              disabled={upload}
            >
              Загрузить
            </Button>
          </div>
          <div className={styles.fullDescription}>
            <p>Полное описание</p>
            <SimpleMdeReact
              options={autofocusNoSpellcheckerOptions}
              value={fields.text}
              onChange={(val) => setFields({ ...fields, text: val })}
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

export default Edit;
