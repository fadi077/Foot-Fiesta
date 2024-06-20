import React, { useEffect, useRef, useState } from 'react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // In the callback, we will receive an array of entries, even if we are only observing a single item
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // This determines how much of the item must be visible for `isIntersecting` to be true
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div className="relative mt-[67px]" ref={containerRef}>
      {/* This container will maintain an aspect ratio */}
      <div className="aspect-w-16 aspect-h-9">
        {/* The image will cover the container */}
        <img className="w-full h-auto object-cover" src="heroimage.png" alt="SneakerImage" />
        {/* Text overlay */}
        <div className={`absolute inset-0 flex items-center justify-between p-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-left ">
            <h2 className="text-black text-4xl font-bold">Epic Adventure</h2>
            <p className="text-black text-xl">Conquer the mountains</p>
          </div>
          <div className="text-right">
            <h2 className="text-black text-4xl font-bold">Chill Thrills</h2>
            <p className="text-black text-xl">Chase the horizon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
