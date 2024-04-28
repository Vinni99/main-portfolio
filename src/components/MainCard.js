import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

function MainHomepage() {
    const [currentPage, setCurrentPage] = useState("About");

    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        } 
    };

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            
            <Footer />

        </div>
    );
}

export default MainHomepage;