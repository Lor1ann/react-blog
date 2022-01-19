import "./App.scss";
import { Author } from "./components/Author";
import Posts from "./components/Posts";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="App">
      <div className="app-flex">
        <Author />
        <Posts />
        <Drawer />
      </div>
    </div>
  );
}

export default App;
