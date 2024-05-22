import React from "react";
import '../styles/resume.css';

function Resume() {
    return (
        <div className="resume">
            <h1> Resume</h1>
            <hr />
            <p>Download my <a href="https://drive.google.com/drive/folders/1G1jr06LRFmo5Ax_lMR2yVeeV7MFYODYb?usp=share_link">Resume</a></p>

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
        </div>
    );
}
export default Resume;