import "../styles/portfolio.css";
import React, { useState, useEffect } from "react";

function Portfolio({ data }) {
  const [displayedText, setDisplayedText] = useState("");
  const element = "< Welcome to my Portfolio✅/>";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + element.charAt(index));
      index++;
      if (index === element.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="portfolio-container">
      <h1 className="title-header">{displayedText}</h1>
      <hr />
      <p>Check out some of my projects!</p>
      <div className="card-container">
        {data.portfolio.map((project, index) => (
          <div key={index} className="card">
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img
                className="image-card"
                src={project.src}
                alt={project.title}
              />
            </a>
            <div className="card-body">
              <div className="title">- {project.title}</div>
              <div className="description">{project.description}</div>
              <div className="tools">
                {project.tools ? project.tools.join(" | ") : ""}
              </div>
              <button
                className="github-btn"
                type="button"
                onClick={() =>
                  window.open(project.href, "_blank", "noopener, noreferrer")
                }
              >
                View in GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
