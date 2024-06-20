import React from 'react'
import { ImCross } from "react-icons/im";

const Cancel = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <ImCross className="text-red-500 mb-4 text-6xl" />
      <h1 className='text-2xl font-semibold text-gray-800'>Payment Not Completed</h1>
      <p className='text-gray-600 mt-2'>Your transaction could not be processed.</p>
    </div>
  )
}

export default Cancel;
