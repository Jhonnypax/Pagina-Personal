import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
/* import Footer from "./components/Footer"; */

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes> 
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
