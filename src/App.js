import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HeroSections/Home.js';
import Navbar from './HeroSections/Navbar.js';
import Footer from './HeroSections/Footer.js';

import About from './components/About.js';
import Service from './components/Service.js';
import Contact from './components/Contact.js';
import News from './components/News.js';
import Testimonials from './components/Testinomials.js';
import Blogs from './components/Blogs.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import TermsService from './components/TermsService.js';

function App() {
  const data = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Testimonials', link: '/testimonials' },
    { name: 'News', link: '/news' },
    { name: 'Blog', link: '/Our-Blogs' },
    { name: 'Privacy Policy', link: '/privacy-policy' },
    { name: 'Terms of Service', link: '/terms-of-service' },
    // Footer links
    { name: 'Our Services', link: '/web-development' },
    { name: 'Testimonial', link: '/testimonials' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar data={data} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/news" element={<News />} />
            <Route path="/Our-Blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsService />} />
          </Routes>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
