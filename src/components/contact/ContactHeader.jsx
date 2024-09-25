import React from "react";

export default function ContactHeader() {
  return (
    <div
      className="bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/denarffyt/image/upload/v1727288846/product-marketing/contact_yfqfta.jpg)`,
      }}
    >
      <div className="bg-black bg-opacity-50 max-w-7xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We'd love to hear from you! Whether you have a question about our
          products, need assistance, or want to explore collaboration
          opportunities, our team is here to help.
        </p>
      </div>
    </div>
  );
}
