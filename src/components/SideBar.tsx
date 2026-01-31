import { useLocation, Link } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  const linkStyle: React.CSSProperties = {
    display: "block",
    padding: "8px 12px",
    color: "var(--muted)",
    textDecoration: "none",
    borderRadius: 6,
    transition: "color 0.15s, background 0.15s",
  };
  const activeStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, rgba(100,108,255,0.06), transparent)",
    fontWeight: 600,
    color: "var(--primary)",
  };

  return (
    <nav style={{ padding: 12, borderRight: "1px solid var(--border)" }}>
      <div style={{ marginBottom: 16 }}>
        <strong>Oscar Weber</strong>
      </div>
      <Link to="/" style={{ ...linkStyle, ...(location.pathname === "/" ? activeStyle : {}) }}>
        Home
      </Link>
      <Link
        to="/gallery"
        style={{ ...linkStyle, ...(location.pathname === "/gallery" ? activeStyle : {}) }}
      >
        Gallery
      </Link>
      <Link to="/cv" style={{ ...linkStyle, ...(location.pathname === "/cv" ? activeStyle : {}) }}>
        CV
      </Link>
      <a
        href="https://github.com/0hscar"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/oscar-weber-a909011ba/"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        LinkedIn
      </a>
    </nav>
  );
}
