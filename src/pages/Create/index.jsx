import React from "react";
import Layout from "../../components/Layout";
import styles from "./Create.module.scss";
import DownloadIcon from "@mui/icons-material/Download";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Create = () => {
  return (
    <div className={styles.createFlex}>
      <div className={styles.create}>
        <form action="">
          <input
            className={styles.title}
            type="text"
            placeholder="Введите заголовок..."
          />
          <div className={styles.description}>
            <p>Короткое описание</p>
            <textarea />
          </div>
          <div className={styles.loader}>
            <div className={styles.loaderText}>
              <p>Ссылка на изображение:</p>
              <textarea />
            </div>
            <button>
              <DownloadIcon className={styles.downloadIcon} />
              <p>Загрузить</p>
            </button>
          </div>
          <div className={styles.fullDescription}>
            <p>Полное описание</p>
            <SimpleMDE />
          </div>
        </form>
      </div>
      <Layout />
    </div>
  );
};

export default Create;
