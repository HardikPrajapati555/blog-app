// import React from 'react';
import React, { useEffect, useState } from "react";

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
  },
];

const images = [
  // "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Fettjl2rGDjHBlCYCXcWMRAoKDr_AQOoXQ&s",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxa9CWxfiyXpAoPdzkQEVbnIloOu7Ti6dVQUkuihlUu_A0h7_GmdOFSwZ-Fq4A4_8Cyw&usqp=CAU",
];                                                                                

function ProductList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="w-full overflow-hidden shadow-lg rounded-xl">
        <div className="relative w-full h-64">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <h2 className="mt-10 text-3xl font-bold text-center">
        Welcome to My store🚀                                                        
      </h2>

      <h2 className="mb-8 text-3xl font-bold text-center">Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden transition duration-300 border rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.oldPrice}
                </span>
                <span className="text-2xl font-bold text-green-600">
                  ₹{product.newPrice}
                </span>
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
