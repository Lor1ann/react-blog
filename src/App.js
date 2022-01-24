import "./App.scss";
import { Author } from "./components/Author";
import { Routes, Route } from "react-router-dom";
import MainPost from "./components/MainPost";
import Auth from "./components/Auth";
import Reg from "./components/Reg";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="app-flex">
        <Routes>
          <Route path="/" element={<Author />} />
          <Route path="/post" element={<MainPost />} />
        </Routes>
      </div>
      <Routes>
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/reg" element={<Reg />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
