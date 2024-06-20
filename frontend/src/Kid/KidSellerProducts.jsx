import React, { useState, useEffect } from 'react';
import { TiShoppingCart, TiCreditCard, TiTick, TiTimes } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../hooks/useCartContext';

function KidSellerProducts() {
  const [cartItem, setCartItem] = useState(null);
  const [shoes, setShoes] = useState([]);
  const { addToCart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products/category/kid`);
        if (response.ok) {
          const data = await response.json();
          setShoes(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      selectedQuantity: 1,
    };
    addToCart(productToAdd);
    setCartItem(product);
    setTimeout(() => navigate('/addtoCart'), 2000);
  };

  return (
    <div className="text-center bg-gradient-to-r from-blue-100 to-green-100 text-gray-800 py-8">
      {cartItem && (
        <div className="popup fixed inset-0 flex items-center justify-center z-50">
          <div className="popup-content bg-white p-6 rounded-lg flex flex-col items-center gap-4 shadow-lg max-w-sm w-full relative">
            <button className="close-button absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setCartItem(null)}>
              <TiTimes size={24} />
            </button>
            <img src={cartItem.imageSrc} alt={cartItem.name} className="object-contain h-24 w-24 mb-4" />
            <div className="flex items-center">
              <TiTick className="text-green-500 mr-2" size={24} />
              <span className="text-lg font-semibold">"{cartItem.name}" is added to your shopping cart</span>
            </div>
            <div className="flex gap-4">
              <button className="btn bg-gray-500 text-white hover:bg-gray-400 px-4 py-2 rounded-md"
                onClick={() => { navigate('/kids'); setCartItem(null) }}>
                Continue Shopping
              </button>
              <button className="btn bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md"
                onClick={() => navigate('/addtoCart')}>
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="pb-4">
        <h1 className="text-4xl font-bold leading-tight text-black">Best Seller</h1>
        <span className="text-2xl text-black">Products</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((product, index) => (
          <div key={index} className="flex flex-col items-center p-4 glassy-card rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img src={product.imageSrc} alt={product.name} className="object-contain h-48 w-full rounded-md mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-xl text-amber-500 mb-4">${product.price}</p>
            <div className="flex gap-4">
              <button className="flex items-center justify-center px-4 py-2 rounded bg-green-500 text-white hover:bg-green-400"
                onClick={() => handleAddToCart(product)}>
                <TiShoppingCart className="mr-1" /> Add to Cart
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KidSellerProducts;

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

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    gap: 0.25rem;
    font-size: 1rem;
  }

  .btn:hover {
    opacity: 0.8;
  }

  .icon {
    margin-right: 0.25rem;
  }

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
