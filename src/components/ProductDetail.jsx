import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); // get dynamic id from URL

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Product Details for ID: {id}</h2>
    </div>
  );
}

export default ProductDetail;
