import React from "react";

const branches = [
  {
    name: "Ice Cream",
    description:
      "Our Ice Cream branch offers a wide variety of delicious and refreshing ice cream products made from the finest ingredients.",
    image:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727288844/product-marketing/ice2_u83tlr.jpg",
  },
  {
    name: "Corporate Gifts",
    description:
      "Our Corporate Gifts branch specializes in creating personalized and unique gift packages for businesses and special events.",
    image:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727288843/product-marketing/cg3_mciane.jpg",
  },
  {
    name: "Green Plant",
    description:
      "Our Green Plant branch focuses on providing eco-friendly, sustainable products, helping to create a greener future.",
    image:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727288846/product-marketing/gp1_gkfgr2.jpg",
  },
];

export default function BranchSection() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Branches
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our diverse range of branches
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {branches.map((branch) => (
            <div key={branch.name}>
              <div className="space-y-4">
                <img
                  className="mx-auto h-40 w-full  xl:w-full xl:h-56"
                  src={branch.image}
                  alt={branch.name}
                />
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{branch.name}</h3>
                  </div>
                  <p className="text-gray-500">{branch.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
