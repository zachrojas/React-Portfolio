import React from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './Footer';

const Main = ( { currentPage, handlePageChange } ) => {
    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
};

export default Main;