import "./App.scss";
import React from "react";
import { Author } from "./pages/Author";
import { Routes, Route } from "react-router-dom";
import FullPost from "./pages/FullPost";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";
import axios from "axios";
import { SET_USER_DATA } from "./redux/actions/user";
import { GET_POSTS } from "./redux/actions/posts";
import Create from "./pages/Create";

function App() {
  const [token, setToken] = React.useState(null);
  const dispatch = useDispatch();

  function getPosts(data) {
    dispatch(GET_POSTS(data));
  }

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
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Author />} />
        <Route path="/post" element={<FullPost />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/reg" element={<Reg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
