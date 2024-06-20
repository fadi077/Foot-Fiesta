import React from 'react';
import { FaStar } from "react-icons/fa";

function WomenFeaturedProduct() {
    const shoes = [
        { name: "City Sleeks", price: "$5.38", rating: 4, img: "https://is4.fwrdassets.com/images/p/fw/zs/VETF-MZ15_V7.jpg" },
        { name: "Stealth Runner", price: "$5.38", rating: 5, img: "https://media.istockphoto.com/id/1329845795/photo/girl-putting-on-sneakers-close-up.webp?b=1&s=170667a&w=0&k=20&c=BDtYIhb0X7ySpdnFSMk34-AkySCWeQktaXEgzKLm5v4=" },
        { name: "City Sleeks", price: "$5.38", rating: 4, img: "https://i.pinimg.com/474x/59/70/7f/59707faa2a66b3201b75d4f038032849.jpg" },
        { name: "City Sleeks", price: "$5.38", rating: 3, img: "https://5.imimg.com/data5/SELLER/Default/2023/2/BO/HT/DZ/22625596/img-4639-500x500.JPG" }
    ];

    return (
        <>
                <div class=" bg-[#c4b4b4] p-3 text-5xl text-black flex justify-center items-center flex-col">
                    Featured
                    <br />
                    <span class="text-black text-xl">Products</span>
                </div>
            <div className="bg-white p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {shoes.map((shoe, index) => (
                        <div key={index} className="flex flex-col items-center p-4 shadow-lg">
                            <img src={shoe.img} alt={shoe.name} className="w-full h-48 object-cover hover:scale-95" />
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

export default WomenFeaturedProduct;
