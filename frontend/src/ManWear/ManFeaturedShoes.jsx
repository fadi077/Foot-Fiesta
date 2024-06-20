import React from 'react';
import { FaStar } from "react-icons/fa";

function ManFeaturedShoes() {
    const shoes = [
        { name: "City Sleeks", price: "$5.38", rating: 4, img: "https://assets.hermes.cn/is/image/hermesproduct/231764ZHI2_front_wm_1?size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&wid=400&hei=400" },
        { name: "Stealth Runner", price: "$5.38", rating: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAfRpDkiN6PocuzhulNGhXnPuxAZ1ZDQs1QlbZfn-nA&s" },
        { name: "City Sleeks", price: "$5.38", rating: 4, img: "https://reebok.bynder.com/transform/41aa5c49-b967-4bd6-bc6e-7ae5a15adeed/23SS_Men-Shoes_FD_IWP-Tile-BB_MB" },
        { name: "City Sleeks", price: "$5.38", rating: 3, img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_YMFsDL13GSJZKRyU4faR8tIWPPBq67aMnJKLQg0U.jpg" }
    ];

    return (
        <>
            <div className="bg-gray-900 p-3 text-5xl text-white flex justify-center items-center flex-col">
                Featured
                <br />
                <span className="text-white text-xl">Products</span>
            </div>
            <div className="bg-white p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {shoes.map((shoe, index) => (
                        <div key={index} className="flex flex-col items-center p-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <img src={shoe.img} alt={shoe.name} className="w-full h-48 object-cover" />
                            <h3 className="mt-2 text-lg font-bold">{shoe.name}</h3>
                            <div className="flex my-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar key={i} className={`${i < shoe.rating ? 'text-yellow-400' : 'text-gray-300'} text-xl`} />
                                ))}
                            </div>
                            <p className="text-lg font-semibold">{shoe.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ManFeaturedShoes;
