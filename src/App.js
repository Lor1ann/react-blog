import "./App.scss";
import { Author } from "./components/Author";
import Posts from "./components/Posts";
import Drawer from "./components/Drawer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="app-flex">
        <Author />
        <div className="nav-flex">
          <Nav />
          <Posts />
        </div>
        <Drawer />
      </div>
    </div>
  );
}

export default App;
