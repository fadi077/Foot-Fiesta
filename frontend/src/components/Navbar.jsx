import React, { useState, useRef, useEffect,useContext } from 'react';
import { GoPerson } from "react-icons/go";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const dropdownRef = useRef(null); // Ref for the user dropdown

    // Cart Count
    const { cartItems } = useContext(CartContext);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Handle outside clicks for dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navigate = useNavigate();

    // Function to handle link click
    const handleLinkClick = (closeDropdown = false) => {
        setIsMobileMenuOpen(false);
        if (closeDropdown) {
            setIsOpen(false);
        }
    };

    // const [cartItemCount, setCartItemCount] = useState(0);  // State to track the cart item count
    // Function to handle adding items to cart
    // const handleAddToCart = () => {
    //     setCartItemCount((prev)=>prev + 1);  // Increment the cart item count
    //     navigate('addtoCart');
    //     setIsMobileMenuOpen(false);
    // };

    return (
        <div>
            <nav className="bg-black/5 backdrop-blur-md text-black pt-1 fixed w-full z-30 top-0 left-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Mobile menu button */}
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:hover:bg-black/70 focus:outline-none focus:bg-[#0786A1] focus:text-black sm:hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {/* Icon for mobile menu */}
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                                </svg>
                            </button>

                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center">
                                <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
                            </div>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4 py-4 ">
                                <Link to="/" className="text-black hover:bg-black/70  hover:text-white px-3 py-2 rounded-md text-sm select-none font-medium" onClick={handleLinkClick}>Home</Link>
                                <Link to="/Men" className="text-black hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm select-none font-medium" onClick={handleLinkClick}>Men</Link>
                                <Link to="/women" className="text-black hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm select-none font-medium" onClick={handleLinkClick}>Women</Link>
                                <Link to="/kids" className="text-black hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm select-none font-medium" onClick={handleLinkClick}>Kids</Link>
                                <Link to="/size-guide" className="text-black hover:bg-black/70 hover:text-white px-3 py-2 rounded-md text-sm select-none font-medium" onClick={handleLinkClick}>Size Guide</Link>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center">
                            <div className="ml-4 relative" ref={dropdownRef}>
                                <GoPerson size={25} className="text-black hover:text-gray-300 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                                        <Link to="/LogIn" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={handleLinkClick}>Log In</Link>
                                        <Link to="/signUp" className="block px-4 py-2 text-sm text-black hover:bg-gray-100" onClick={handleLinkClick}>Sign Up</Link>
                                    </div>
                                )}
                            </div>
                            <div className="ml-4 relative">
                                <GiShoppingCart size={25} className="text-black hover:text-gray-300 cursor-pointer"
                              onClick={()=> navigate('addtoCart')}
                                />
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartItemCount}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link to="/" className="text-black hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Home</Link>
                        <Link to="/Men" className="text-black hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleLinkClick}>Men</Link>
                        <Link to="/women" className="text-black hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Women</Link>
                        <Link to="/kids" className="text-black hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Kids</Link>
                        <Link to="/size-guide" className="text-black hover:bg-blue-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleLinkClick}>Size Guide</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
