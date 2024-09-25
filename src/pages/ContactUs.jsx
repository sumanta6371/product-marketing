// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        {/* Add more form fields */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;