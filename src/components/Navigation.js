import React from "react";
import { Nav } from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Nav className="justify-content-end" variant='pills' defaultActiveKey='#Portfolio'>
        <Nav.Item>
          <Nav.Link href="#portfolio"
           onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about-me" 
          onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}>About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact" 
          onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#resume" 
          onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>Resume</Nav.Link>
        </Nav.Item>
      </Nav> 
    </>
  );
}

export default NavTabs;