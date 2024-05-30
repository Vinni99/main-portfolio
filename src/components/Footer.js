import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="footerEl">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/vinicius-teixeira-468a55269/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/Vinni99" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="github" icon={faGithub} size="2x" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="create">© 2024 | Created by Vinni</p>
            </div>
        </footer>
    );
}

export default Footer;