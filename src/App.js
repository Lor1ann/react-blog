import "./App.scss";
import React from "react";
import { Author } from "./pages/Author";
import { Routes, Route, useLocation } from "react-router-dom";
import Post from "./pages/Post";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SET_USER_DATA } from "./redux/actions/user";
import { GET_POSTS } from "./redux/actions/posts";
import Create from "./pages/Create";
import NonAuth from "./pages/NonAuth";
import Err404 from "./pages/404";

function App() {
  const [token, setToken] = React.useState(null);
  const dispatch = useDispatch();
  function getPosts(data) {
    dispatch(GET_POSTS(data));
  }
  const location = useLocation();
  function setUsersData(data) {
    dispatch(SET_USER_DATA(data));
  }

  React.useEffect(() => {
    axios
      .get("http://localhost:5656/posts")
      .then(({ data }) => {
        getPosts(data.items);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, []);

  React.useEffect(() => {
    axios
      .get("http://localhost:5656/auth/me", {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        setUsersData(data);
      });
  }, [token]);

  return (
    <div className="App">
      <Routes>
        {token ? (
          <Route path="/Profile" element={<Profile />} />
        ) : (
          <Route path="/Profile" element={<NonAuth />} />
        )}
        {token ? (
          <Route path="/create" element={<Create />} />
        ) : (
          <Route path="/create" element={<NonAuth />} />
        )}

        <Route path="/" element={<Author />} />
        <Route path="/post/:id" element={<Post />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/reg" element={<Reg />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
    </div>
  );
}

export default App;
