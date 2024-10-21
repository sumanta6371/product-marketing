import React from "react";
import { Link } from "react-router-dom";

export default function CompanyInfo() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome to Mandri Enterprise
        </h2>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl">
          At Mandri Enterprise, we specialize in creating unforgettable
          gifting experiences that leave a lasting impression. Whether you’re
          looking for elegant corporate gifts to express gratitude or unique
          return gifts for your special events, our curated selection offers
          something for every occasion.
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
  );
}
