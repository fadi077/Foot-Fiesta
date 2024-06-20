import React from 'react';

export default function TopSellingShoe() {
  return (
    <div className="bg-white/30 backdrop-blur-md relative text-black h-screen flex items-center justify-center overflow-hidden ">
      {/* Enhanced gradient overlay for better focus and visual effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left lg:w-1/3 flex flex-col justify-center items-center lg:items-start z-10">
          <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            Stride Elite
          </h1>
          <p className="text-lg lg:text-xl mt-4">
            Step into a new era of agility and endurance
          </p>
        </div>

        {/* Enhanced image scaling and hover effects */}
        <div className="z-10 lg:transform lg:rotate-12 lg:scale-110 lg:translate-x-24 hover:scale-125 transition-transform duration-300">
          <img
            src="SellingShoe.png"
            alt="Running Shoes"
            className="w-64 md:w-96 lg:w-auto"
          />
        </div>

        <div className="text-center lg:text-right lg:w-1/3 flex flex-col justify-center items-center lg:items-end z-10">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide">
            Run with Precision
          </h2>
          <p className="text-lg lg:text-xl mt-4">
            Unleash speed, style, and sophistication with every mile
          </p>
        </div>
      </div>
    </div>
  );
}
