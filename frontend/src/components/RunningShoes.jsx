import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchAllProducts } from "./data/fetchData";

export default function RunningShoes() {
    const navigate = useNavigate();
    const { products } = useFetchAllProducts(); // []

    return (
        <div className="mx-auto max-w-7xl px-5 py-24">
            <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-semibold">Running</h2>
                <h2 className="text-2xl sm:text-4xl font-bold">
                    Shoes
                    <span className="text-sm sm:text-lg text-gray-700 mx-4">
                        At Foot Fiesta, we offer a wide range of Running Shoes.
                    </span>
                </h2>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="p-4 relative group cursor-pointer"
                         onClick={() => navigate(`/product/${product._id}`, { state: product })}>
                        <Link to={`/product/${product.id}`} className="block">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 relative">
                                {product.newTag && (
                                    <span className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded-bl-md rounded-tr-md">
                                        NEW
                                    </span>
                                )}
                                {product.discount && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-br-md rounded-tl-md">
                                        -{product.discount}%
                                    </span>
                                )}
                                <img
                                    src={product.imageSrc}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {/* Buttons if needed */}
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.color}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
