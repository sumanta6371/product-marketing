import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProductHero({ name, tagline, image }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <LazyLoadImage
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        effect="blur"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{name}</h1>
          <p className="text-xl md:text-2xl text-white">{tagline}</p>
        </div>
      </div>
    </div>
  );
}