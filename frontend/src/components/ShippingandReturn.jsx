import React from 'react';

const ShippingAndReturn = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">Shipping and Returns</h1>
      <p className="text-gray-600 text-lg mb-6">
        We aim to make your shopping experience as convenient as possible, from order to delivery. Here are our shipping and return policies:
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Policy</h2>
      <ul className="list-none space-y-4 text-gray-800">
        <li>All orders are processed within 24-48 hours.</li>
        <li>Free standard shipping on all orders over $50.</li>
        <li>Expedited shipping options are available at an additional cost.</li>
        <li>Tracking information will be provided for all orders.</li>
      </ul>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Return Policy</h2>
      <ul className="list-none space-y-4 text-gray-800">
        <li>Returns can be made within 30 days of receipt for a full refund.</li>
        <li>Items must be returned in their original condition and packaging.</li>
        <li>Return shipping fees are the responsibility of the customer, unless the return is due to an error on our part.</li>
        <li>Refunds will be issued to the original payment method within 7 days of receiving the returned item.</li>
      </ul>
      <p className="text-gray-600 text-lg mt-6">
        For any questions regarding our shipping or return policies, please contact our customer service team.
      </p>
    </div>
  )
}

export default ShippingAndReturn;
