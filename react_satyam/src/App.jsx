import React from 'react';
// import LandingPage from './home.jsx';
// import PaymentPage from './payment.jsx';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 font-sans">

      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">VoteApp</a>
          <nav className="flex space-x-4">
            <a href="#features" className="text-gray-600 hover:text-gray-800">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">Sign Up</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-4">Make Every Vote Count!</h1>
            <p className="text-lg mb-6">Join our platform to cast your vote and have your voice heard. Voting has never been this easy and accessible.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">Get Started</button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img src="https://via.placeholder.com/400" alt="Voting Illustration" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Features</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 7v10m5-5H7"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Easy Voting</h3>
                <p className="text-gray-600 mt-2">Quick and easy voting process to make your choices matter in seconds.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Secure System</h3>
                <p className="text-gray-600 mt-2">Your votes are stored securely and safely, ensuring integrity.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 16h-1v-4H9l3-7v3h1l-3 7h3v4z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800">Real-Time Results</h3>
                <p className="text-gray-600 mt-2">Get live updates on voting results as they come in, with full transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 VoteApp. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
      {/* <LandingPage /> */}
      {/* <PaymentPage/> */}
      
    </div>
  );
};

export default LandingPage;

