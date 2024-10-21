import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import business from "../../assets/business-growth.jpg";

export default function CompanyStory() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <LazyLoadImage
            className="w-full h-full object-cover"
            src={business}
            alt="Company representation"
            effect="blur"
          />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8">
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-gray-500 mb-4">
              In the fast-paced world of business, building strong relationships
              is key. At Mandri Enterprise, we understand the power of
              thoughtful gifts. Our mission is to provide high-quality,
              customizable gifts that reflect your brand values and resonate
              with your recipients. From personalized items to eco-friendly
              options, we have the perfect solution for any corporate event,
              trade show, or celebration.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">
              Product Categories
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong className="text-gray-900">Corporate Gifts:</strong>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <strong>Executive Gift Sets:</strong> Luxurious combinations
                    of office supplies, tech gadgets, and gourmet treats.
                  </li>
                  <li>
                    <strong>Personalized Gifts:</strong> Customized notebooks,
                    pens, or mugs with your logo or a heartfelt message.
                  </li>
                  <li>
                    <strong>Eco-Friendly Options:</strong> Sustainable gifts
                    such as reusable tote bags, bamboo products, and plant kits.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-gray-900">Return Gifts:</strong>
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    <strong>Event-Specific Gifts:</strong> Tailored gifts for
                    weddings, birthdays, and anniversaries that reflect the
                    theme of your celebration.
                  </li>
                  <li>
                    <strong>Fun and Practical Items:</strong> Unique items like
                    custom puzzles, travel kits, or gourmet snack boxes that
                    guests will love.
                  </li>
                  <li>
                    <strong>Charitable Contributions:</strong> Make a donation
                    in your guests’ names to a cause they care about, adding a
                    meaningful touch to your event.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Key Milestones
            </h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  2010: Company founded
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  2015: Launched our flagship product line
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  2018: Expanded to international markets
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-500">
                  2022: Achieved carbon neutrality in operations
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
