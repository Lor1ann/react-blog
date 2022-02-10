import "./App.scss";
import React from "react";
import { Author } from "./pages/Author";
import { Routes, Route, useLocation } from "react-router-dom";
import Post from "./pages/Post";
import Auth from "./pages/Auth";
import Reg from "./pages/Reg";
import Profile from "./pages/Profile";
import { useDispatch } from "react-redux";
import { instance } from "./axios";
import { SET_USER_DATA } from "./redux/actions/user";
import Create from "./pages/Create";
import NonAuth from "./pages/NonAuth";
import Err404 from "./pages/404";

function App() {
  const [token, setToken] = React.useState(null);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const location = useLocation();
  function setUsersData(data) {
    dispatch(SET_USER_DATA(data));
  }

  React.useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, []);

  React.useEffect(() => {
    instance
      .get("/auth/me", {
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
