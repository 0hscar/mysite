import React from "react";
import ReactMarkdown from "react-markdown";
import "./CV.css"; // Assuming you have a CSS file for styling

function CV() {
  const [content, setContent] = React.useState("");
  React.useEffect(() => {
    fetch("/cv.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <div className="cv-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default CV;
