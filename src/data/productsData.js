const productsData = [
  {
    id: "1",
    name: "Premium Ice Cream Deluxe",
    tagline: "Indulge in creamy perfection",
    heroImage:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727366539/product-marketing/ice9-min_tvxksr.jpg",
    detailImage:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727366539/product-marketing/ice9-min_tvxksr.jpg",
    description:
      "Welcome to Dip It – Where Every Bite is a Sweet Escape!Indulge your senses at Dip It, your go-to destination for artisanal ice cream and decadent chocolate desserts. Whether you’re looking for a classic scoop, a unique flavor combination, or a rich chocolate treat, we have something to satisfy every sweet tooth. Join us for a delightful experience that turns every visit into a celebration!",
    features: [
      // "Made with 100% organic cream",
      // "No artificial flavors or preservatives",
      // "Available in 12 unique flavors",
      // "Gluten-free options available",
      // "Sustainably sourced ingredients",
      "At Dip it, we believe that life is too short not to indulge in sweet moments. Our journey began with a passion for creating high-quality, handcrafted ice cream and chocolate desserts. Using only the finest ingredients, we craft each treat with love and creativity. From traditional favorites to innovative flavors, we’re dedicated to making every visit a delicious adventure."
    ],
    relatedProducts: [
      {
        id: "2",
        name: " Ice Cream Sandwiches",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366538/product-marketing/ice4-min_dqwsnk.jpg",
        shortDescription: "Refreshing fruit sorbets made with real fruit.",
      },
      {
        id: "3",
        name: "Vegan Ice Cream",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366536/product-marketing/ice10-min_q1kv9a.jpg",
        shortDescription: "Dairy-free ice cream that's just as creamy.",
      },
      {
        id: "4",
        name: "Ice Cream Cake",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366535/product-marketing/ice5-min_dc4ofs.jpg",
        shortDescription: "Celebration cakes made with our premium ice cream.",
      },
      {
        id: "5",
        name: "Fruit Sorbet Collection",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366535/product-marketing/ice7-min_ytg6vd.jpg",
        shortDescription: "Classic treats with a gourmet twist and cream.",
      },
      {
        id: "6",
        name: "Mint Chocolate Chip Ice Cream",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727634600/mint_choco_aotcpr.avif",
        shortDescription: "Cool mint ice cream with rich chocolate chips.",
      },
      {
        id: "7",
        name: "Peanut Butter Fudge Ice Cream",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727634730/penautbutter_autzts.webp",
        shortDescription: "Rich peanut butter ice cream with fudge swirls.",
      },
      {
        id: "8",
        name: "Cookies and Cream Ice Cream",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727634766/cookies_egbmjz.jpg",
        shortDescription:
          "Vanilla ice cream loaded with chocolate cookie chunks.",
      },
      {
        id: "9",
        name: "Rocky Road Ice Cream",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727634800/rockyroad_ll3xtl.jpg",
        shortDescription: "Chocolate ice cream with marshmallows and almonds.",
      },
    ],
    reviews: [
      {
        rating: 5,
        comment:
          "The best ice cream I've ever tasted! Creamy and full of flavor.",
        name: "Sarah L.",
        date: "May 15, 2023",
      },
      {
        rating: 4,
        comment: "Love the variety of flavors. The chocolate is my favorite!",
        name: "Mike R.",
        date: "June 2, 2023",
      },
      {
        rating: 5,
        comment:
          "Absolutely delicious and love that it's made with organic ingredients.",
        name: "Emily T.",
        date: "June 10, 2023",
      },
    ],
  },
  {
    id: "2",
    name: "Corporate Gifts",
    tagline: "Impress and delight with thoughtful presents",
    heroImage:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727366534/product-marketing/cg5-min_ctzygi.jpg",
    detailImage:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727288843/product-marketing/cg3_mciane.jpg",
    description:
      "Our Corporate Gifts collection is designed to leave a lasting impression on your clients, partners, and employees. Each gift is carefully curated to reflect your company's values and appreciation, fostering stronger business relationships and boosting morale.",
    features: [
      "Customizable gift options",
      "Eco-friendly packaging",
      "Wide range of price points",
      "Bulk ordering available",
      "Personalized message cards",
    ],
    relatedProducts: [
      {
        id: "6",
        name: "Executive Gift Set",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366534/product-marketing/cg7-min_w6ozfs.jpg",
        shortDescription:
          "Luxurious gifts for high-level executives and professionals.",
      },
      {
        id: "7",
        name: "Tech Gadget Bundle",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366538/product-marketing/gc6-min_t6tppe.jpg",
        shortDescription:
          "Cutting-edge tech accessories for the modern professional.",
      },
      {
        id: "8",
        name: "Wellness Package",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366538/product-marketing/cg8-min_wlabe9.jpg",
        shortDescription:
          "Promote employee well-being with our curated wellness gifts.",
      },
      {
        id: "9",
        name: "Gourmet Food Hamper",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727366534/product-marketing/cg5-min_ctzygi.jpg",
        shortDescription: "Delightful selection of premium food and beverages.",
      },
      // {
      //   id: "10",
      //   name: "Luxury Stationery Set",
      //   image:
      //     "https://res.cloudinary.com/denarffyt/image/upload/v1727366535/product-marketing/cg9-min_w6ozfs.jpg",
      //   shortDescription:
      //     "Elegant stationery set with personalized notebooks and pens for professionals.",
      // },
      // {
      //   id: "11",
      //   name: "Premium Wine Gift Box",
      //   image:
      //     "https://res.cloudinary.com/denarffyt/image/upload/v1727366539/product-marketing/cg10-min_t6tppe.jpg",
      //   shortDescription:
      //     "Exquisite selection of fine wines in a beautifully crafted wooden box.",
      // },
      // {
      //   id: "12",
      //   name: "Corporate Travel Essentials",
      //   image:
      //     "https://res.cloudinary.com/denarffyt/image/upload/v1727366539/product-marketing/cg11-min_wlabe9.jpg",
      //   shortDescription:
      //     "A set of travel must-haves for the modern business traveler.",
      // },
      // {
      //   id: "13",
      //   name: "Gourmet Chocolate Collection",
      //   image:
      //     "https://res.cloudinary.com/denarffyt/image/upload/v1727366537/product-marketing/cg12-min_ctzygi.jpg",
      //   shortDescription:
      //     "An assortment of premium chocolates, perfect for gifting.",
      // },
      // {
      //   id: "14",
      //   name: "Personalized Office Decor Set",
      //   image:
      //     "https://res.cloudinary.com/denarffyt/image/upload/v1727366535/product-marketing/cg13-min_w6ozfs.jpg",
      //   shortDescription:
      //     "Stylish office decor items personalized with your company's logo.",
      // }
    ],
    reviews: [
      {
        rating: 5,
        comment:
          "The customized gift sets were a hit with our clients. Excellent quality and presentation!",
        name: "John D.",
        date: "July 3, 2023",
      },
      {
        rating: 4,
        comment:
          "Great variety of options for different budgets. The personalized touch was appreciated.",
        name: "Lisa M.",
        date: "August 15, 2023",
      },
      {
        rating: 5,
        comment:
          "Seamless ordering process and timely delivery. Will definitely use again for our corporate events.",
        name: "Robert K.",
        date: "September 22, 2023",
      },
    ],
  },
  {
    id: "3",
    name: "Greenworld Products",
    tagline: "Sustainable living made easy",
    heroImage:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727288846/product-marketing/gp1_gkfgr2.jpg",
    detailImage:
      "https://res.cloudinary.com/denarffyt/image/upload/v1727288846/product-marketing/gp1_gkfgr2.jpg",
    description:
      "Our Greenworld Products line offers a comprehensive range of eco-friendly items designed to help you reduce your environmental impact without compromising on quality or convenience. From everyday essentials to innovative solutions, we're committed to making sustainable living accessible to all.",
    features: [
      "Made from recycled or biodegradable materials",
      "Plastic-free packaging",
      "Carbon-neutral shipping options",
      "Supports various environmental initiatives",
      "Durable and long-lasting designs",
    ],
    relatedProducts: [
      {
        id: "10",
        name: "Reusable Food Wraps",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727372382/product-marketing/reusable-food-wraps-bags-made-from-sustainable-materials-designed-replace-singleuse-pla_1314467-88574-min_rb2jap.jpg",
        shortDescription:
          "Eco-friendly and sustainable alternative to plastic wrap.",
      },
      {
        id: "11",
        name: "Bamboo Cutlery Set",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727372384/product-marketing/top-view-arrangement-zero-waste-products-wooden-background-min_nmql5o.jpg",
        shortDescription:
          "Portable and sustainable eco-friendly eating utensils.",
      },
      {
        id: "12",
        name: "Solar-Powered Charger",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727372383/product-marketing/3d-electric-car-parked-min_nhkyxg.jpg",
        shortDescription: "Harness the sun's energy to power your devices.",
      },
      {
        id: "13",
        name: "Organic Cotton Tote",
        image:
          "https://res.cloudinary.com/denarffyt/image/upload/v1727372383/product-marketing/organic_tote-min_hwhswh.jpg",
        shortDescription: "Durable, washable bags for everyday use.",
      },
    ],
    reviews: [
      {
        rating: 5,
        comment:
          "Love the reusable food wraps! They work great and have significantly reduced my plastic usage.",
        name: "Emma S.",
        date: "October 5, 2023",
      },
      {
        rating: 4,
        comment:
          "The bamboo cutlery set is perfect for my work lunches. Sturdy and eco-friendly.",
        name: "Alex P.",
        date: "November 12, 2023",
      },
      {
        rating: 5,
        comment:
          "Impressed with the quality of all the products I've tried. It's great to find a one-stop shop for eco-friendly items.",
        name: "Olivia C.",
        date: "December 8, 2023",
      },
    ],
  },
];

export default productsData;
