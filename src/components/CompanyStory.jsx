import React from 'react';
import business from '../assets/business-growth.jpg'; 

export default function CompanyStory() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={business}
            alt="Company representation"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-500">
              Founded in 2010, our company began with a simple idea: to create products that enhance people's lives. 
              Over the years, we've grown from a small startup to a recognized brand, always staying true to our core 
              values of innovation, quality, and customer satisfaction. Our mission is to continue pushing boundaries 
              and delivering exceptional products that make a difference in our customers' daily lives.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Key Milestones</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">2010: Company founded</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">2015: Launched our flagship product line</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">2018: Expanded to international markets</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">2022: Achieved carbon neutrality in operations</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}