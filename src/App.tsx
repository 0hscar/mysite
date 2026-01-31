import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import CV from "./cv/CV";
import Intro from "./content/intro/Intro";
import Contact from "./content/contact/Contact";
import MediaPreviewArea from "./components/MediaPreviewArea";
import Gallery from "./components/Gallery";
import Sidebar from "./components/SideBar";
import PinnedRepos from "./components/PinnedRepos";


function Home() {
  return (
    <div style={{ textAlign: "left" }}>
      <Intro />
      <Contact />
      <MediaPreviewArea />
      <PinnedRepos />
      {/* Keep the original manual Projects component as a fallback / extended list */}
      {/*<div style={{ marginTop: 16 }}>
        <Projects />
      </div>*/}
    </div>
  );
}

function AppShell() {
  // Layout: left sidebar + main content area
  return (
    <div
      id="root"
      style={{
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "2rem",
        color: "var(--text)",
      }}
    >
      <aside
        style={{
          width: 220,
          minWidth: 180,
          borderRight: "1px solid var(--border)",
          paddingRight: 12,
          boxSizing: "border-box",
          background: "var(--surface)",
        }}
      >
        <Sidebar />
      </aside>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
