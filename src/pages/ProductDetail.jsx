import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductHero from '../components/productdetail/ProductHero';
import ProductInfo from '../components/productdetail/ProductInfo';
import ProductHighlights from '../components/productdetail/ProductHighlights';
import UserReviews from '../components/productdetail/UserReviews';
import productsData from '../data/productsData';

const fetchProductData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsData.find(p => p.id === id);
      resolve(product || null);
    }, 100); 
  });
};

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductData(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

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
  );
}