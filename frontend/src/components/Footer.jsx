import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="mt-10 p-10 text-gray-300 bg-gradient-to-b from-gray-700 to-gray-900 backdrop-blur-md relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-10">
          <nav className="text-center md:text-left">
            <h6 className='text-3xl text-white mb-2 font-bold'>Foot Fiesta</h6>
            <p className='mb-1'>Call Customer Services, We Support 24/7</p>
            <span className='mb-2'>+1 (555) 234-5678</span>
            <p className='text-gray-300'>Address:</p>
            <p>545 Mavis Island, Chicago, IL 99191</p>
          </nav>

          <nav className="text-center md:text-left">
            <Link to="#" className="text-2xl mb-2 text-white font-semibold">Customer Service</Link>
            <Link to="/contactUs" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Contact Us</Link>
            <Link to="/shippingandreturn" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Shipping and Return</Link>
            <Link to="/termsandCondition" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Terms and Condition</Link>
            <Link to="/refundPolicy" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Refund Policy</Link>
          </nav>

          <nav className="text-center md:text-left">
            <h6 className="text-2xl mb-2 text-white font-semibold">About Us</h6>
            <Link to="#" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Who we are</Link>
            <Link to="#" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Careers</Link>
            <Link to="#" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Privacy Policy</Link>
            <Link to="#" className="block my-1 text-lg hover:text-white hover:underline cursor-pointer">Country Law</Link>
          </nav>

          <nav className="text-center md:text-left">
            <h6 className="text-2xl mb-2 text-white font-semibold">Social</h6>
            <div className="flex justify-center md:justify-start mt-2">
              <a className="text-3xl mx-2 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:scale-110">
                <FaFacebook />
              </a>
              <a className="text-3xl mx-2 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:scale-110">
                <IoLogoInstagram />
              </a>
              <a className="text-3xl mx-2 hover:text-white cursor-pointer transition duration-200 ease-in-out transform hover:scale-110">
                <FaTwitter />
              </a>
            </div>
          </nav>
        </div>
        <div className="text-center mt-8 text-gray-400">
          <p>© 2024 Foot Fiesta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
