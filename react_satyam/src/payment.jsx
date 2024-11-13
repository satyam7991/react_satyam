import React from 'react';

const PaymentPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Pay with QR Code</h1>
        
        <div className="flex items-center justify-center mb-6">
          <img 
            src="your-qr-code-image.jpg" 
            alt="QR Code" 
            className="w-48 h-48 object-cover border border-gray-300 rounded-lg"
          />
        </div>

        <p className="text-center text-gray-600 mb-6">
          Scan the QR code above with your mobile payment app to make a payment.
        </p>

        <div className="text-center">
          <button 
            className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
