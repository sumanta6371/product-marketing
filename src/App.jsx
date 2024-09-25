// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;