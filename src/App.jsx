import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductDetail from './components/ProductDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default App;