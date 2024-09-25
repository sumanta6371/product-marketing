import React from 'react';
import about from '../../assets/about.jpg'; 

export default function AboutHeader() {
  return (
    <div
      className="bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${about})` }} // Using the about image as background
    >
      <div className="bg-black bg-opacity-50 max-w-7xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          About Us
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Our Journey and Vision
        </p>
      </div>
    </div>
  )
}
