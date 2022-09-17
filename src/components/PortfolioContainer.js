import React from 'react';
import Navbar from './Header';
import Aboutme from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ContactForm from './pages/ContactForm';
import Footer from './Footer'

export default function PortfolioContainer({currentPage, tabbed, setLayout, setCurrentPage}) {

    const renderPage = () => {
        if (currentPage === 'aboutMe') {
            return <Aboutme />;
        }
        if (currentPage === 'Phase1') {
            return <Projects />;
        }
        if (currentPage === 'Phase2') {
            return <Projects />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <ContactForm />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {tabbed ?
                (
                    <div className="portfolio-app" >
                        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} setLayout={setLayout} />
                        {renderPage()}
                        <Footer />
                    </div >
                )
                :
                (
                    <div className="portfolio-app">
                        <Navbar setLayout={setLayout} />
                        <Aboutme />
                        <Projects />
                        <Resume />
                        <ContactForm />
                        <Footer />
                    </div>
                )
            }
        </div>

    )
}
