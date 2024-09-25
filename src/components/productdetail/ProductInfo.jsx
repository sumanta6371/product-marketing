import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductInfo({ name, description, features, image }) {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img src={image} alt={name} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{name}</h2>
          <p className="mt-4 text-gray-500">{description}</p>
          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}