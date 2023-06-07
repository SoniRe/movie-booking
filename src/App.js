import "./App.css";
import PostList from "./components/PostList/PostList";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostList />}></Route>

        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
