import "./App.scss";
import { Author } from "./components/Author";
import { Routes, Route } from "react-router-dom";
import MainPost from "./components/MainPost";
import Auth from "./components/Auth";
import Reg from "./components/Reg";

function App() {
  return (
    <div className="App">
      <div className="app-flex">
        <Routes>
          <Route path="/" element={<Author />} exact />
          <Route path="/post" element={<MainPost />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/reg" element={<Reg />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
