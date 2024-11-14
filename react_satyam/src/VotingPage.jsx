
import React, { useState } from 'react';

const VotingPage = () => {
  const [votes, setVotes] = useState({
    Math: 0,
    Science: 0,
    English: 0
  });

  const handleVote = (subject) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [subject]: prevVotes[subject] + 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Available Courses</h1>
      
      <div className="flex flex-wrap justify-center gap-16">
        {/* Math Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-center transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Math</h2>
          <p className="text-gray-600 mb-4">A fascinating world of numbers and equations. Cast your vote if Math is your favorite!</p>
          <button
            onClick={() => handleVote('Math')}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-300">
            Vote for Math
          </button>
          <p className="mt-4 text-gray-700 font-semibold">Votes: {votes.Math}</p>
        </div>

        {/* Science Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-center transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Science</h2>
          <p className="text-gray-600 mb-4">Discover the wonders of the universe. Vote if Science is your favorite!</p>
          <button
            onClick={() => handleVote('Science')}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition duration-300">
            Vote for Science
          </button>
          <p className="mt-4 text-gray-700 font-semibold">Votes: {votes.Science}</p>
        </div>

        {/* English Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-center transform hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">English</h2>
          <p className="text-gray-600 mb-4">Explore the beauty of language and literature. Vote if English is your favorite!</p>
          <button
            onClick={() => handleVote('English')}
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-500 transition duration-300">
            Vote for English
          </button>
          <p className="mt-4 text-gray-700 font-semibold">Votes: {votes.English}</p>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
