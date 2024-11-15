import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Header from './Header';
import VotingPage from './VotingPage';
import Home from './home';
import Footer from './Footer';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VotingPage" element={<VotingPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
};

export default App;





