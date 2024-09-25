import React from 'react';
import Carousel from '../components/home/Carousel';
import CompanyInfo from '../components/home/CompanyInfo';
import ProductShowcase from '../components/home/ProductShowcase';

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