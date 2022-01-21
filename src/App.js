import "./App.scss";
import { Author } from "./components/Author";
import SidePosts from "./components/SidePosts";
import Drawer from "./components/Drawer";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import MainPost from "./components/MainPost";

function App() {
  return (
    <div className="App">
      <div className="app-flex">
        <Routes>
          <Route path="/" element={<Author />} exact />
          <Route path="/post" element={<MainPost />} />
        </Routes>
        <div className="nav-flex">
          <Nav />
          <SidePosts />
        </div>
        <Drawer />
      </div>
    </div>
  );
}

export default App;
