import React, { useState } from 'react'

export default function ContactForm() {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Send us a message</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`transition-all duration-300 ease-in-out focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${focused ? 'shadow-md border-indigo-500' : 'shadow-sm border-gray-300'}`}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`transition-all duration-300 ease-in-out focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${focused ? 'shadow-md border-indigo-500' : 'shadow-sm border-gray-300'}`}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="subject"
                id="subject"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`transition-all duration-300 ease-in-out focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${focused ? 'shadow-md border-indigo-500' : 'shadow-sm border-gray-300'}`}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`transition-all duration-300 ease-in-out focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${focused ? 'shadow-md border-indigo-500' : 'shadow-sm border-gray-300'}`}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
