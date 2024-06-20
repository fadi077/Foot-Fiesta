import React from 'react'

const TermsandCondition = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Foot Fiesta! We're excited to provide you with quality footwear suitable for all occasions. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold text-gray-800">1. Use of the Site</h2>
            <p className="text-gray-600">
              The content and products on this website are intended for your personal, non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">2. Privacy Policy</h2>
            <p className="text-gray-600">
              Your privacy is important to us. Our privacy policy, which sets out how we will use your information, can be accessed <a href="/privacy" className="text-blue-500 hover:text-blue-700">here</a>. By using this site, you consent to the processing described therein and warrant that all data provided by you is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">3. Product Information</h2>
            <p className="text-gray-600">
              We make every effort to display as accurately as possible the colors and images of our products that appear at the store. However, we cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">4. Modifications to the Service and Prices</h2>
            <p className="text-gray-600">
              Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800">5. User Comments, Feedback, and Other Submissions</h2>
            <p className="text-gray-600">
              If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.
            </p>
          </section>
        </div>

 
      </div>
    </div>
  </div>
  );
}

export default TermsandCondition
