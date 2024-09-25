import React from 'react'
import cg3 from  '../assets/cg3.jpg'
import ice2 from  '../assets/ice2.jpg'
import gp1 from  '../assets/gp1.jpg'


const products = [
  {
    name: 'Dipit Ice Cream',
    description: 'Indulge in our premium, creamy ice cream made with the finest ingredients and unique flavors.',
    image: ice2
  },
  {
    name: 'Corporate Gifts',
    description: 'Impress your clients and partners with our elegant and thoughtful corporate gift packages.',
    image: cg3
  },
  {
    name: 'Greenworld Products',
    description: 'Discover our range of eco-friendly products that help you live a more sustainable lifestyle.',
    image: gp1
  }
]

export default function ProductShowcase() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}