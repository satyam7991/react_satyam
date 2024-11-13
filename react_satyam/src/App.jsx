import React from 'react';
import LandingPage from './home.jsx';
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <div className="bg-gray-100 font-sans">

      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">VoteApp</a>
          <nav className="flex space-x-4">
          <ul>
          <li className="text-gray-600 hover:text-gray-800"><Link to="/">Home</Link></li>
          <li className="text-gray-600 hover:text-gray-800"><Link to="/">Courses</Link></li>
          <li className="text-gray-600 hover:text-gray-800"><Link to="/">Vote</Link></li>
          <li className="text-gray-600 hover:text-gray-800"><Link to="/">Results</Link></li>
        </ul>
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
      <LandingPage />      
    </div>
  );
};

export default App;





