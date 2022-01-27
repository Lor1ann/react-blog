import React from "react";
import style from "./SidePosts.module.scss";
import Post from "./components/Post.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const posts = [
  {
    title: "Как с помощью Dadata определить город по IP?",
    text: "На работе потребовалось запилить задачу для автоматического определения города при совершении заказа. Было решено сделать это на фронте, ибо бек был занят.",
    photo:
      "https://images.unsplash.com/photo-1607970669494-309137683be5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: new Date(),
    views: "301",
  },
  {
    title: "Ставим обработчик фокуса для кастомоного React-компонента",
    text: "Что делать, если разработчик компонента для форматирования номера телефона или других данных в текстовом поле, не добавил обработчики на установку и снятие фокуса?",
    date: new Date(),
    views: "301",
  },
  {
    title: "Какой-то очень интересный заголовок",
    text: "На работе потребовалось запилить задачу для автоматического определения города при совершении заказа. Было решено сделать это на фронте, ибо бек был занят.",
    photo:
      "https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: new Date(),
    views: "301",
  },
];

const SidePosts = () => {
  const searchValue = useSelector((state) => state.search.searchValue);

  return (
    <div className={style.posts}>
      {posts
        .filter((elem) =>
          elem.title
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
        )
        .map((obj) => {
          return (
            <Link
              key={obj.title}
              to={"/post"}
              style={{ textDecoration: "none" }}
            >
              <Post
                title={obj.title}
                text={obj.text}
                photo={obj.photo}
                date={obj.date}
                views={obj.views}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default SidePosts;
