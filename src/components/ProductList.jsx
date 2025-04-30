import React from 'react';

const products = [
  {
    id: 1,
    name: "Cemaro",
    image: "",
    oldPrice: 2000,
    newPrice: 1500,
    unit: "per kg",
  },
  {
    id: 2,
    name: "mobile_1",
    image: "",
    oldPrice: 1000,
    newPrice: 700,
    unit: "per dozen",
  },
  {
    id: 3,
    name: "Apple",
    image: "",
    oldPrice: 1500,
    newPrice: 1000,
    unit: "per kg",
  },
  {
    id: 4,
    name: "HELLO",
    image: "",
    oldPrice: 1500,
    newPrice: 1000,
    unit: "per kg",
  }
];

function ProductList() {
  return (
    
    <div className="container mx-auto my-8">
         <h2 className="mt-10 text-3xl font-bold text-center">Welcome to My store🚀</h2>

      <h2 className="mb-8 text-3xl font-bold text-center">Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map(product => (
          <div key={product.id} className="overflow-hidden transition duration-300 border rounded-lg shadow-md hover:shadow-lg">
            <img src={product.image} alt={product.name} className="object-cover w-full h-40" />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-500 line-through">₹{product.oldPrice}</span>
                <span className="text-2xl font-bold text-green-600">₹{product.newPrice}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{product.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;                                                         
