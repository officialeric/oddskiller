import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import HelpCenter from './components/HelpCenter/HelpCenter';
import CB from './components/cb/cb';

function HomePage() {
  return (
    <div className="page-wrapper">
      <div className="main-hero-area">
        <div className="container">
          <div className="hero-contact-row">
            <Hero />
            <Contact />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App body1">
        <Preloader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path='/cb' element={<CB/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
