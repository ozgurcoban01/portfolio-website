import "./App.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import Navbar from "./components/Navbar.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import About from "./components/About";

function App() {
  return (
    <div className="App select">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
