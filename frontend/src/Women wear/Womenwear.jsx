import React from 'react';

function Womenwear() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 lg:flex-row lg:justify-between lg:px-12 lg:py-24 bg-[#f7f7f7]">
      <div className="flex flex-col items-start text-left max-w-lg lg:flex-1">
        <h1 className="text-3xl font-bold lg:text-4xl">Introducing</h1>
        <h2 className="mt-2 text-4xl font-bold lg:text-6xl">Graceful Steps</h2>
        <p className="mt-4 text-lg lg:text-xl">
          Your go-to choice for elegant women's shoes and{' '}
          <span className="block font-semibold">unmatched comfort in every stride</span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-8 lg:flex-0 lg:mr-12 lg:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-900 opacity-10 rounded-lg"></div>
          <img
            src="WomenWear.png"
            alt="Graceful Steps"
            className="relative w-full max-w-sm lg:max-w-lg rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Womenwear;
