import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/article/:articleid" element={<ArticlePage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
