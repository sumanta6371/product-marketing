import React from 'react'
import { useParams } from 'react-router-dom'
import ProductHero from '../components/productdetail/ProductHero'
import ProductInfo from '../components/productdetail/ProductInfo'
import ProductHighlights from '../components/productdetail/ProductHighlights'
import UserReviews from '../components/productdetail/UserReviews'

// This is a mock data object. In a real application, you would fetch this data from an API or database.
const productData = {
  id: '1',
  name: 'Premium Ice Cream Deluxe',
  tagline: 'Indulge in creamy perfection',
  heroImage: '/images/ice-cream-hero.jpg',
  detailImage: '/images/ice-cream-detail.jpg',
  description: 'Our Premium Ice Cream Deluxe is crafted with the finest ingredients, offering a rich and creamy texture that melts in your mouth. Each scoop is a perfect balance of flavor and smoothness, making it an irresistible treat for ice cream lovers.',
  features: [
    'Made with 100% organic cream',
    'No artificial flavors or preservatives',
    'Available in 12 unique flavors',
    'Gluten-free options available',
    'Sustainably sourced ingredients'
  ],
  relatedProducts: [
    { id: '2', name: 'Fruit Sorbet Collection', image: '/images/sorbet.jpg', shortDescription: 'Refreshing fruit sorbets made with real fruit.' },
    { id: '3', name: 'Vegan Ice Cream', image: '/images/vegan-ice-cream.jpg', shortDescription: "Dairy-free ice cream that's just as creamy." },
    { id: '4', name: 'Ice Cream Cake', image: '/images/ice-cream-cake.jpg', shortDescription: 'Celebration cakes made with our premium ice cream.' },
    { id: '5', name: 'Ice Cream Sandwiches', image: '/images/ice-cream-sandwich.jpg', shortDescription: 'Classic treats with a gourmet twist.' }
  ],
  reviews: [
    { rating: 5, comment: "The best ice cream I've ever tasted! Creamy and full of flavor.", name: "Sarah L.", date: "May 15, 2023", avatar: "/images/avatar1.jpg" },
    { rating: 4, comment: "Love the variety of flavors. The chocolate is my favorite!", name: "Mike R.", date: "June 2, 2023", avatar: "/images/avatar2.jpg" },
    { rating: 5, comment: "Absolutely delicious and love that it's made with organic ingredients.", name: "Emily T.", date: "June 10, 2023", avatar: "/images/avatar3.jpg" }
  ]
}

export default function ProductDetail() {
  const { id } = useParams()
  // In a real application, you would fetch the product data based on the id
  // For this example, we're using the mock data
  const product = productData

  return (
    <div>
      <ProductHero name={product.name} tagline={product.tagline} image={product.heroImage} />
      <ProductInfo
        name={product.name}
        description={product.description}
        features={product.features}
        image={product.detailImage}
      />
      <ProductHighlights relatedProducts={product.relatedProducts} />
      <UserReviews reviews={product.reviews} />
    </div>
  )
}