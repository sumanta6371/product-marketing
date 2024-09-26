import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: "https://res.cloudinary.com/denarffyt/image/upload/v1727288843/product-marketing/ice1_kphzul.jpg",
    title: 'Premium Ice Cream',
    description: 'Indulge in our creamy, artisanal ice cream made with the finest ingredients.'
  },
  {
    image: "https://res.cloudinary.com/denarffyt/image/upload/v1727340931/product-marketing/ice3_l9kqgg.jpg",
    title: 'Premium Ice Cream',
    description: 'Indulge in our creamy, artisanal ice cream made with the finest ingredients.'
  },
  {
    image: "https://res.cloudinary.com/denarffyt/image/upload/v1727288842/product-marketing/cg1_azzx5a.jpg",
    title: 'Elegant Corporate Gifts',
    description: 'Impress your clients with our curated selection of sophisticated corporate gifts.'
  },
  {
    image: "https://res.cloudinary.com/denarffyt/image/upload/v1727288843/product-marketing/cg2_n16y7i.jpg",
    title: 'Eco-Friendly Products',
    description: 'Discover our range of sustainable, environmentally conscious products.'
  }
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold">{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}