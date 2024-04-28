import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation({ currentPage, setCurrentPage }) {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link
                    href="#about"
                    onClick={() => setCurrentPage("About")}
                    className={currentPage === "About" ? "nav-link active" : "nav-link"}
                >
                    About
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    href="#portfolio"
                    onClick={() => setCurrentPage("Portfolio")}
                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    href="#contact"
                    onClick={() => setCurrentPage("Contact")}
                    className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    href="#resume"
                    onClick={() => setCurrentPage("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;