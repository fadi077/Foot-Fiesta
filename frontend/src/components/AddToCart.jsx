import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../hooks/useCartContext';
import { TiTrash } from "react-icons/ti";

const AddToCart = () => {
    const { cartItems, removeFromCart, updateQuantity, setItemQuantity } = useCartContext();
    const navigate = useNavigate();

    const total = cartItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0).toFixed(2);

    const handleCheckout = async () => {
        const orderDetails = {
            orderItems: [...cartItems],
            totalPrice: total,
        };

        const token = localStorage.getItem('jwtToken');

        if (!token) {
            console.error('Authentication token not found. Please log in.');
            return;
        }

        try {
            const response = await fetch('/api/orders/createOrder', {
                method: 'POST',
                body: JSON.stringify({
                    orderItems: cartItems,
                    totalPrice: total
                }),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                window.location.href = data.url;
            } else {
                console.error('Error from server:', data.message);
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="mt-16 text-2xl font-bold mb-6">SHOPPING CART</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <img src={item.imageSrc} alt={item.name} className="w-20 h-20 mr-4 object-cover" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <div className="flex items-center">
                                               {item.selectedColor && (
                                                <>
                                                 <span className="text-sm text-gray-600 mr-2">Color:</span>
                                                <div
                                                    style={{
                                                        backgroundColor: item.selectedColor,
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        border: '1px solid #000'
                                                    }}
                                                />
                                                </>
                                               )}
                                            </div>
                                           {item.selectedSize && ( <p className="text-sm text-gray-600">Size: {item.selectedSize}</p>)}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">${Number(item.price).toFixed(2)}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    <div className="flex items-center justify-center">
                                        <button className="px-2 py-1 border border-gray-400 rounded-lg" onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)}>-</button>
                                        <input type="text" value={item.quantity} readOnly className="w-8 mx-2 text-center border rounded-lg" />
                                        <button className="px-2 py-1 border border-gray-400 rounded-lg" onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)}>+</button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">${(Number(item.price) * item.quantity).toFixed(2)}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    <button className="text-gray-600 hover:text-red-600" onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}>
                                        <TiTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
                <div className="flex gap-4 mb-4 lg:mb-0">
                    <button className="bg-black text-white px-4 py-2 rounded-md" onClick={() => navigate('/')}>CONTINUE SHOPPING</button>
                    <button onClick={handleCheckout} className="bg-black text-white px-4 py-2 rounded-md">CHECK OUT</button>
                </div>
                <div className="text-right">
                    <p className="text-lg font-bold">Total</p>
                    <p className="text-2xl text-amber-600">${total}</p>
                    <p className="text-sm text-gray-600">Shipping & taxes calculated at checkout</p>
                </div>
            </div>
            <textarea className="mt-6 w-full p-2 border rounded-md" rows="4" placeholder="Add a note to your order"></textarea>
        </div>
    );
};

export default AddToCart;
