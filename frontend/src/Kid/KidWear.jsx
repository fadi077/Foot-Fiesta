import React from 'react';

function KidsWear() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-r from-blue-100 to-green-300">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:px-12 lg:py-24 w-full max-w-5xl">
        <div className="lg:flex-1 flex flex-col items-center text-center lg:items-start lg:text-left max-w-lg">
          <h1 className="text-3xl font-bold lg:text-4xl mt-6">Introducing</h1>
          <h2 className="mt-2 text-4xl font-bold lg:text-6xl">Playful Strides</h2>
          <p className="mt-4 text-lg lg:text-xl">
            Fun, colorful, and comfortable footwear for{' '}
            <span className="block font-semibold">your little ones' every step</span>
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center lg:ml-12 mt-8 lg:mt-0">
          <img
            src="kid.png"
            alt="Playful Strides"
            className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default KidsWear;
