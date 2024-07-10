import React from "react";
import '../styles/resume.css';

function Resume() {
    return (
        <div className="resume">
            <h1> Resume</h1>
            <hr />
            {/* <p>Download my <a href="https://drive.google.com/file/d/1CfOmwdI3aNdYa9Q3xYpJLt33vDeMOhOm/view?usep=sharing" target="_blank" rel="noopener noreferrer">Resume</a></p> */}

            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
            </ul>

            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            <h3>Tech Stack</h3>
            <ul>
                <li>Visual Studio Code</li>
                <li>GitHub</li>
                <li>Heroku</li>
                <li>Insomnia</li>
            </ul>
        </div>
    );
}

export default Resume;