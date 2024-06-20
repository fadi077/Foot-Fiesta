import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-gray-50 rounded-lg shadow-md mt-10">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-8">Refund Policy</h1>
      <p className="text-gray-600 text-lg mb-6">
        At Foot Fiesta, we are committed to providing you with quality footwear. If you are not fully satisfied with your purchase, here’s our refund policy:
      </p>
      <ul className="list-none space-y-4 text-gray-800">
        <li>Returns and refunds are available within 30 days of purchase.</li>
        <li>The items must be unused and in the same condition that you received them.</li>
        <li>Original receipts or proof of purchase is required for all returns and refunds.</li>
        <li>Refunds will be processed to the original method of payment within 7-10 business days.</li>
        <li>For defective or damaged products, please contact our customer service immediately for a replacement or refund.</li>
      </ul>
      <p className="text-gray-600 text-lg mt-6">
        We hope your shopping experience with Foot Fiesta is enjoyable and satisfying. For further inquiries, please contact our support team.
      </p>
    </div>
  )
}

export default RefundPolicy;
