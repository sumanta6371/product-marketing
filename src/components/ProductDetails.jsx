// src/components/ProductDetail.jsx
import React from 'react';

const ProductDetail = () => {
  return (
    <div className="container mx-auto my-10 p-5 border rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Product Name</h3>
      <p className="mt-2">This is a short description of the product. It highlights key features and benefits.</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
        View More
      </button>
    </div>
  );
};

export default ProductDetail;