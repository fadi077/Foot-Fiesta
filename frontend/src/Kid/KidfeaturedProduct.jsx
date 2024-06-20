import React from 'react'
import { FaStar } from "react-icons/fa";

function KidFeaturedProduct() {
    const shoes = [
        { name: "City Sleeks", price: "$5.38", rating: 4, img: "https://www.servis.pk/cdn/shop/products/B-BO-0100032_5.jpg?v=1681197981" },
        { name: "Stealth Runner", price: "$5.38", rating: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHCmfAM1_s4rdv_5jRJ0Kg6upKPd4JBpZEY_ZZUSYyQ&s" },
        { name: "City Sleeks", price: "$5.38", rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjxnuUIS0Yk7roKyAq-XMWwXSbE4qw7v6sHFLL_AJ7g&s" },
        { name: "City Sleeks", price: "$5.38", rating: 3, img: "https://m.media-amazon.com/images/I/71Kqi7nseuS._AC_UF894,1000_QL80_.jpg" }
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 text-center flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold text-blue-600">Featured</h1>
                <span className="text-xl text-blue-400">Products</span>
            </div>
            <div className="bg-white p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {shoes.map((shoe, index) => (
                        <div key={index} className="flex flex-col items-center p-4 rounded-lg glassy-card shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-100">
                            <img src={shoe.img} alt={shoe.name} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="mt-2 text-lg font-bold text-gray-800">{shoe.name}</h3>
                            <div className="flex my-2">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar key={i} className={`${i < shoe.rating ? 'text-yellow-400' : 'text-gray-300'} text-xl`} />
                                ))}
                            </div>
                            <p className="text-lg font-semibold text-gray-800">{shoe.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default KidFeaturedProduct;

// CSS
const styles = `
  .glassy-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .glassy-card:hover {
    transform: scale(1.05);
    background-color: rgba(173, 216, 230, 0.3); /* Light blue hover effect */
  }

  .btn:hover {
    opacity: 0.8;
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
