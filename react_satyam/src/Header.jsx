import React from 'react'
import {  NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className="bg-gray-100 font-sans" >
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">VoteApp</a>
          <nav className="flex space-x-4">
          <ul className='flex items-center gap-14 mr-5'>
          <NavLink to="/"><li className="text-gray-600 hover:text-gray-800">Home</li></NavLink>
          <NavLink to="/VotingPage">  <li className="text-gray-600 hover:text-gray-800">Courses</li></NavLink>
          <NavLink to="/"> <li className="text-gray-600 hover:text-gray-800">Vote</li></NavLink>
          <NavLink to="/">   <li className="text-gray-600 hover:text-gray-800">Results</li></NavLink>
        </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300">Sign Up<link to="/Signup"></link></button>
          </nav>
        </div>
      </header>

    </div>
  )
}

export default Header