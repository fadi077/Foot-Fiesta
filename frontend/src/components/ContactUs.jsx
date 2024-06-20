import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
          <p className="text-gray-700">
            Explore the perfect fit for every step at Foot Fiesta. Whether you're looking for style advice, need help with your order, or have a question about our products, we're here to assist you every day of the week. Our dedicated team is eager to help you find your ideal pair or resolve any issues you may encounter.
          </p>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Foot Fiesta Headquarters</h3>
            <p className="text-gray-700">545 Mavis Island, Chicago, IL 99191</p>
            <p className="text-gray-700">+1 (555) 234-5678</p>
            <p className="text-gray-700">support@footfiesta.com</p>
          </div>
        </div>
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="input text-base p-4 border-gray-300 rounded-md w-full" />
              <input type="text" placeholder="Last name" className="input text-base p-4 border-gray-300 rounded-md w-full" />
            </div>
            <input type="email" placeholder="Email" className="input text-base p-4 border-gray-300 rounded-md w-full" />
            <input type="tel" placeholder="Phone number" className="input text-base p-4 border-gray-300 rounded-md w-full" />
            <textarea placeholder="Message" className="textarea text-base p-4 border-gray-300 rounded-md w-full" rows="4"></textarea>
            <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
