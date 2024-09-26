import React from 'react'

export default function ProductHero({ name, tagline, image }) {
  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={image}
        // src="https://res.cloudinary.com/denarffyt/image/upload/v1727340931/product-marketing/ice3_l9kqgg.jpg"
        // src="https://res.cloudinary.com/denarffyt/image/upload/v1727366539/product-marketing/ice9-min_tvxksr.jpg"
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{name}</h1>
          <p className="text-xl md:text-2xl text-white">{tagline}</p>
        </div>
      </div>
    </div>
  )
}