import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen relative pointer-events-none">
      <ScrollToTop />
      <Header />
      
      
      {/* Glassmorphic container for the routed pages */}
      <div className="flex-1 flex flex-col z-10 relative pointer-events-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
        </Routes>
      </div>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
