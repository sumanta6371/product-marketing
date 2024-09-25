import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyInfo() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome to Your Company Name
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl">
          We are dedicated to providing high-quality products that enhance your life and business. 
          From delicious ice cream to elegant corporate gifts and eco-friendly solutions, 
          we strive to exceed your expectations in every category.
        </p>
        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}