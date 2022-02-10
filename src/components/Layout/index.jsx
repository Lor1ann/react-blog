import React from "react";
import Drawer from "../Drawer";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Post from "../Posts";
import style from "./Layout.module.scss";
import { instance } from "../../axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Layout = () => {
  const [posts, setPosts] = React.useState(null);
  const searchValue = useSelector((state) => state.search.searchValue);
  const [postsPage, setPostsPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const limit = 5;
  React.useEffect(() => {
    instance
      .get(`/posts`)
      .then(({ data }) => setTotalPages(Math.ceil(data.total / limit)))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    instance
      .get(`/posts?query=${searchValue}&limit=${limit}&page=${postsPage}`)
      .then(({ data }) => setPosts(data.items))
      .catch((err) => console.log(err));
  }, [postsPage, searchValue]);

  return (
    <>
      <div className="nav-flex">
        <Nav />
        {posts && (
          <div className={style.posts}>
            {posts
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj) => {
                return (
                  <Link
                    key={obj._id}
                    to={`/posts/${obj._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Post
                      title={obj.title}
                      date={new Date(obj.createdAt)}
                      text={obj.description}
                      photo={obj.photoUrl}
                      views={obj.views}
                    />
                  </Link>
                );
              })}
            <div className={style.pagination}>
              <div className={style.buttons}>
                <button
                  disabled={postsPage === 1}
                  type="button"
                  onClick={() => {
                    setPostsPage((prev) => prev - 1);
                  }}
                >
                  <ArrowBackIcon />
                </button>
                <button
                  disabled={postsPage === totalPages}
                  type="button"
                  onClick={() => {
                    setPostsPage((prev) => prev + 1);
                  }}
                >
                  <ArrowForwardIcon />
                </button>
              </div>
              <p>{`Cтраница ${postsPage} из ${totalPages}`}</p>
            </div>
          </div>
        )}
      </div>
      <Drawer />
    </>
  );
};

export default Layout;
