// src/pages/Contact.jsx
import React from "react";
import paper from "../assets/contact.jpg";

const Contact = () => {
  return (
    <div className="px-10  my-10">
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={paper}
          alt="Banner"
          className="w-full h-[350px] object-cover rounded-xl"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="text-white text-center text-4xl font-bold tracking-wider">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Mandi Enterprises
          </h2>
          <p className="mt-2 text-gray-600">123 Business Street, Suite 456</p>
          <p className="text-gray-600">Mumbai, Maharashtra 400001</p>

          <div className="mt-4">
            <p className="text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@mandienterprises.com"
                className="text-blue-600 hover:underline"
              >
                info@mandienterprises.com
              </a>
            </p>
            <p className="text-gray-700 mt-1">Phone: +91 22 1234 5678</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Products and Services
          </h3>
          <p className="text-gray-600">
            Mandi Enterprises is a leading distributor of agricultural products
            and services in India. We specialize in providing high-quality
            seeds, fertilizers, and farming equipment to support the growth and
            success of Indian farmers.
          </p>
          <p className="text-gray-600 mt-2">
            Our team of experts is dedicated to offering personalized solutions
            and support to meet the unique needs of each farmer. Contact us
            today to learn how we can help optimize your agricultural
            operations.
          </p>
        </div>

        {/* <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Request a Quote
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
