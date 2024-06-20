import React from 'react';

function MajesticStride() {
  return (
    <div className="bg-[#E6E9E4] flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen lg:min-h-auto px-4 py-12 lg:py-12">
      <div className="lg:flex-1 flex flex-col items-start text-left max-w-lg lg:ml-12">
        <h1 className="text-3xl lg:text-4xl font-bold">Introducing</h1>
        <h2 className="text-4xl lg:text-6xl font-bold mt-2">
          Majestic Stride
        </h2>
        <p className="mt-4 text-lg lg:text-xl">
          Your go-to choice for timeless elegance and
          <span className="block font-semibold">unparalleled comfort in every step</span>
        </p>
      </div>
      <div className="flex-0 flex justify-end items-center lg:mr-12 mt-4 lg:mt-0">
        <img src="Majestic Stride.png" alt="Majestic Stride" className="w-full max-w-sm lg:max-w-lg"/>
      </div>
    </div>
  )
}

export default MajesticStride;
