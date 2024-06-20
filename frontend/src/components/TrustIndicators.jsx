import React from 'react';
import { BsRocketTakeoff } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";

function TrustIndicators() {
    return (
        <div className='mt-10 flex flex-col md:flex-row justify-center items-center gap-8 p-4'>
            <div className='flex flex-col items-center bg-white border-dashed border-2 border-[#999] p-4 rounded-lg'>
                <BsRocketTakeoff className='text-2xl mb-2' />
                <h2 className='text-lg font-semibold'>Express Shipping</h2>
                <span className='text-sm text-center px-8'>
                Get your orders fast and hassle-free. Our expedited shipping ensures that your purchase arrives promptly, in pristine condition</span>
            </div>
            <div className='flex flex-col items-center bg-white border-dashed border-2 border-[#999] p-4 rounded-lg'>
                <AiOutlineSafety className='text-2xl mb-2' />
                <h2 className='text-lg font-semibold'>Payment Secured</h2>
                <span className='text-sm text-center px-8'>
                Shop with confidence. Our secure payment system protects your information and privacy, providing a safe and reliable checkout experience</span>
            </div>
            <div className='flex flex-col items-center bg-white border-dashed border-2 border-[#999] p-4 rounded-lg'>
                <IoWalletOutline className='text-2xl mb-2' />
                <h2 className='text-lg font-semibold'>Money Back Guarantee</h2>
                <span className='text-sm text-center px-8'>
                Satisfaction guaranteed or your money back. We stand behind our products and are committed to your happiness with a no-risk return policy</span>
            </div>
        </div>
    );
}

export default TrustIndicators;
