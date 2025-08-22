import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CV from "./cv/CV";
import Intro from "./content/intro/Intro";
import Contact from "./content/contact/Contact";
import Projects from "./content/projects/Projects";

function Home() {
  return (
    <>
      <Intro />
      <Contact />
      <Projects />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
