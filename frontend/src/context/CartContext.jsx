import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item._id === product._id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize);
        if (existingItem) {
            setCartItems(cartItems.map(item => item._id === product._id && item.selectedColor === product.selectedColor && item.selectedSize === product.selectedSize 
                ? { ...item, quantity: item.quantity + product.selectedQuantity }
                : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: product.selectedQuantity }]);
        }
    };

    const removeFromCart = (productId, selectedColor, selectedSize) => {
        setCartItems(cartItems.filter(item => !(item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize)));
    };

    const updateQuantity = (productId, selectedColor, selectedSize, delta) => {
        setCartItems(cartItems.map(item => {
            if (item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize) {
                const updatedQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: updatedQuantity };
            }
            return item;
        }));
    };

    const setItemQuantity = (productId, selectedColor, selectedSize, quantity) => {
        setCartItems(cartItems.map(item => {
            if (item.id === productId && item.selectedColor === selectedColor && item.selectedSize === selectedSize) {
                return { ...item, quantity };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, setItemQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
