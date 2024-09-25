import React from 'react';
import Carousel from '../components/Carousel';
import CompanyInfo from '../components/CompanyInfo';
import ProductShowcase from '../components/ProductShowcase';


const Home = () => {
  return (
    <>
      <Carousel />
      <CompanyInfo />
      <ProductShowcase />
    </>
  );
};

export default Home;