import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import data from "./data/index.js";


function App() {

  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const section = document.getElementById(page.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio data={data} />;
    }
    if (currentPage === "About") {
      return <About handleButtonClick={() => handlePageChange('Portfolio')} />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div className="HomePage">
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />

    </div>
  );
}

export default App;
