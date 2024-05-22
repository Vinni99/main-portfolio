import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


function App() {

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
    <div className="HomePage">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <App />
      <Footer />

    </div>
  );
}

export default App;
