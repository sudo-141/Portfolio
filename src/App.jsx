import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Work from './Work';
import Tech from './Tech';
import Contact from './Contact';
import Education from './Education';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home.html" element={<Home />} /> {/* Fallback for legacy links */}
        <Route path="/work" element={<Work />} />
        <Route path="/work.html" element={<Work />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/tech.html" element={<Tech />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education.html" element={<Education />} />
      </Routes>
    </Router>
  );
};

export default App;
