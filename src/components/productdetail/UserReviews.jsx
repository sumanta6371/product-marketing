import React from 'react';
import { Star, User } from 'lucide-react';

export default function UserReviews({ reviews }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Customer Reviews</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <div className="flex items-center">
                <User className="h-10 w-10 text-gray-400 mr-4" />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}