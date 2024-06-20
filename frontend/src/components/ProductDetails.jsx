import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsPlus, BsDash } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from '../hooks/useCartContext';

export default function ProductDetails() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState({});
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`/api/products/${productId}`);
                const json = await response.json();

                if (response.ok) {
                    setProductDetail(json);
                    setSelectedColor(json.colors ? json.colors[0] : '');
                    setSelectedSize(json.sizes ? json.sizes[0] : '');
                } else {
                    console.log("Error :", json.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchProductDetail();
    }, [productId]);

    const { addToCart } = useCartContext();

    const handleQuantityChange = (type) => {
        if (type === "increase") {
            setSelectedQuantity(selectedQuantity + 1);
        } else if (type === "decrease" && selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        const productToAdd = {
            ...productDetail,
            selectedColor,
            selectedSize,
            selectedQuantity,
        };
        addToCart(productToAdd);
        setTimeout(() => navigate('/addtoCart'), 2000);
    };

    const renderStars = (rating) => {
        if (typeof rating !== 'number' || rating < 0) return null;
        
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <BsStarFill key={index} className="text-yellow-400" />
                ))}
                {halfStar && <BsStarHalf className="text-yellow-400" />}
            </>
        );
    };

    return (
        <div className="container mx-auto mt-10 mb-10 px-4">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 xl:w-1/3 px-4 mb-6 lg:mb-0">
                    <div className="mt-20 overflow-hidden rounded-lg border mb-4">
                        <img src={productDetail?.imageSrc} alt={productDetail?.name} className="object-cover w-full h-[45vh]" />
                    </div>
                </div>

                <div className="mt-20 w-full lg:w-1/2 xl:w-2/3 px-4 lg:pl-10">
                    <h1 className="text-3xl font-bold mb-2">{productDetail?.name}</h1>

                    <div className="flex items-center mb-2">
                        <div className="flex">{renderStars(productDetail?.rating)}</div>
                        <span className="ml-2">{productDetail?.rating} / 5</span>
                    </div>

                    <div className="text-2xl font-semibold text-gray-800 mb-4">${productDetail?.price}</div>

                    <div className="text-green-600 mb-2">Available: {productDetail?.availability}</div>
                    <div className="text-green-600 mb-2">Description: {productDetail?.description}</div>

                    <div className="text-gray-600 mb-2">SKU: {productDetail?.sku}</div>

                    { Array.isArray(productDetail.categories)?(
                        <div className="text-gray-600 mb-2">Categories: {productDetail?.categories?.join(", ")}</div>
                    ):(
                        <div className="text-gray-600 mb-2">Categories: {productDetail?.categories}</div>
                    )}

                    <div className="text-gray-600 mb-4">Tags: {productDetail?.tags?.join(", ")}</div>

                    <div className="mb-4">
                        <h3 className="text-gray-600 mb-2">Color:</h3>
                        <div className="flex space-x-2">
                            {productDetail?.colors?.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundColor: color,
                                        width: '50px',
                                        height: '50px',
                                        margin: '5px',
                                        border: selectedColor === color ? '2px solid black' : '1px solid #000'
                                    }}
                                    onClick={() => setSelectedColor(color)}
                                >
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-gray-600 mb-2">Size:</h3>
                        <div className="flex space-x-2">
                            {productDetail?.sizes?.map((size, index) => (
                                <button
                                    key={index}
                                    className={`border p-2 rounded ${selectedSize === size ? 'border-black' : 'border-gray-300'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <button
                            className="border p-2 rounded"
                            onClick={() => handleQuantityChange("decrease")}
                        >
                            <BsDash />
                        </button>
                        <input
                            type="text"
                            value={selectedQuantity}
                            className="border text-center w-12 mx-2"
                            readOnly
                        />
                        <button
                            className="border p-2 rounded"
                            onClick={() => handleQuantityChange("increase")}
                        >
                            <BsPlus />
                        </button>

                        <button onClick={handleAddToCart} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded ml-4 flex items-center">
                            <FaShoppingCart className="mr-2" /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
