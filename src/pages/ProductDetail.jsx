import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
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

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [highlightsRef, highlightsInView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [reviewsRef, reviewsInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    fetchProductData(id).then(data => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
    </div>;
  }

  if (!product) {
    return <div className="flex items-center justify-center h-screen text-2xl text-gray-600">Product not found</div>;
  }

  return (
    <div className="overflow-hidden">
      <div ref={heroRef} className={`transition-opacity duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`}>
        <ProductHero name={product.name} tagline={product.tagline} image={product.heroImage} />
      </div>
      <div ref={infoRef} className={`transition-all duration-1000 transform ${infoInView ? 'bounce translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ProductInfo
          name={product.name}
          description={product.description}
          features={product.features}
          image={product.detailImage}
        />
      </div>
      <div ref={highlightsRef} className={`transition-all duration-1000 transform ${highlightsInView ? '-translate-y-10 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <ProductHighlights relatedProducts={product.relatedProducts} />
      </div>
      <div ref={reviewsRef} className={`transition-all duration-1000 transform ${reviewsInView ? '-translate-y-10 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <UserReviews reviews={product.reviews} />
      </div>
    </div>
  );
}