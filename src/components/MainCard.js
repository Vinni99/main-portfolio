import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
    const [currentPage, setCurrentPage] = useState("Portfolio");

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
        };
    };

    return (
        <div>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {renderPage()}
            <Footer />
        </div>
    );
}
export default App;