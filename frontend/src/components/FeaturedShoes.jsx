import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { TiTick, TiTimes } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function FeaturedShoes() {
    const [cartItem, setCartItem] = useState(null);

    const shoes = [
        {
            name: "Urban Walkers",
            price: "$95",
            image: "https://img.freepik.com/premium-photo/pair-nike-shoes-are-top-each-other_771335-48561.jpg?w=740",
            rating: 4
        },
        {
            name: "Trail Blazer",
            price: "$110",
            image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600",
            rating: 4
        },
        {
            name: "City Sleek",
            price: "$130",
            image: "https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=600",
            rating: 5
        }
    ];

    const addToCart = (shoe) => {
        setCartItem(shoe);
    }
    const navigate=useNavigate();

    return (
        <div className="item-center px-4 py-5 sm:px-6 lg:px-8">
            {cartItem && (
                <div className="popup fixed inset-0 flex items-center justify-center z-50">
                    <div className="popup-content bg-white p-6 rounded-lg flex flex-col items-center gap-4 shadow-lg max-w-sm w-full relative">
                        <button className="close-button absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                onClick={() => setCartItem(null)}>
                            <TiTimes size={24} />
                        </button>
                        {/* <img src={cartItem.image} alt={cartItem.name} className="object-contain h-24 w-24 mb-4" /> */}
                        {/* <div className="flex items-center">
                            <TiTick className="text-green-500 mr-2" size={24} />
                            <span className="text-lg font-semibold">"{cartItem.name}" is added to your shopping cart</span>
                        </div> */}
                        {/* <div className="flex gap-4">
                            <button className="btn bg-gray-500 text-white hover:bg-gray-400 px-4 py-2 rounded-md"
                                    onClick={() => setCartItem(null)}
                                    >
                                Continue Shopping
                            </button>
                            <button className="btn bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md"
                                    onClick={() => navigate('/addtoCart')}>
                                Go to Cart
                            </button>
                        </div> */}
                    </div>
                </div>
            )}
            <div className="flex flex-wrap justify-center gap-[3.5rem]">
                {shoes.map((shoe, index) => (
                    <div
                        key={index}
                        className="w-full md:w-80 bg-white border-dashed border-2 border-[#999] rounded-lg shadow hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
                    >
                        <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden'>
                            <img className="w-full h-[260px] object-cover object-center" src={shoe.image} alt={shoe.name} />
                        </div>
                        <div className="px-5 pb-5">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{shoe.name}</h5>
                            <div className="flex items-center mt-2.5 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-xl ${i < Math.floor(shoe.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                                {shoe.rating % 1 !== 0 && (
                                    <FaStar className="text-xl text-yellow-400 half-star" />
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{shoe.price}</span>
                                {/* <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => addToCart(shoe)}
                                >
                                    Add to cart
                                </button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedShoes;

// CSS
const styles = `
  .popup {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .popup-content {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
