import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/portfolio.css";


function Portfolio({ data }) {


    return (
        <div className="portfolio-container">
            <div className="title-header">Welcome to my Portfolio</div>
            <hr />
            <p>Check out some of my projects!</p>
            <div className="card-container">
                {data.portfolio.map((project, index) => (
                    <div key={index} className="card">
                        <img className="image-card" src={project.src} alt={project.title} />
                        <div className="card-body">
                            <div className="title">- {project.title}</div>
                            <div className="description">{project.description}</div>
                            <div className="tools">
                                {project.tools ? project.tools.join(" | ") : ""}
                            </div>
                            <button className="github-btn" type="button"
                                onClick={() => window.open(project.href, "_blank", "noopener, noreferrer")}
                            >View in GitHub</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Portfolio;