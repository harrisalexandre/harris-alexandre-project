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
      
      {/* Parallax 3D Background - Global */}
      <div className="fixed inset-0 w-full h-full z-0 hidden lg:block bg-[#110e0c] pointer-events-auto">
        <Spline scene="https://prod.spline.design/Vp8pTB9enRZy-YSl/scene.splinecode" />
      </div>
      <div className="fixed inset-0 w-full h-full z-0 block lg:hidden bg-gradient-to-br from-[#1a1412] to-[#0a0807]"></div>

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
