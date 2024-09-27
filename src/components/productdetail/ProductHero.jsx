import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProductHero({ name, tagline, image }) {
  return (
    <div className="relative h-[50vh] md:h-screen overflow-hidden">
      <LazyLoadImage
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        effect="blur"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center p-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2">
            {name}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
}