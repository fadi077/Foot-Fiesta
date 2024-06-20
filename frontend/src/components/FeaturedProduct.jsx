import React from 'react';
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export default function FeaturedProduct() {
  const features = [
    'Gender: Men',
    'Sports Type: LIFESTYLE',
    'Upper Material: Mesh (Air mesh)',
    'Shoe Width: Medium(B,M)',
    'Upper Height: Low',
    'Function: Stability',
    'Outsole Material: Rubber',
    'Technology: Flywire',
    'Applicable Place: Outdoor Lawn',
  ];
  const navigate = useNavigate();

  return (
    <div className="mt-20 bg-gray-800/30 backdrop-blur-md text-gray-900 flex flex-col md:flex-row items-center md:items-start justify-around p-8 rounded-lg shadow-lg">
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
        <h3 className="text-xl text-black mb-2">FEATURED PRODUCTS</h3>
        <h2 className="text-3xl mb-4 text-black">LUKMALL MEN RUNNING</h2>
        {/* <button 
          className="text-gray-800 bg-lime-500 hover:bg-lime-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300"
          // onClick={() => navigate('/addtoCart')}
        >
          Buy Now
        </button> */}
      </div>
      <div className="mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105">
        <img
          src="gray_shoes-.png"  
          alt="LUKMALL MEN RUNNING"
          className="shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <TiTickOutline className="text-black" />
            <p className="ml-2 text-gray-900">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
