import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaCoins, FaInfoCircle, FaUser } from 'react-icons/fa'; // Import icons
import Home from "./pages/Home";
import CurrenciesList from "./pages/CurrenciesList";
import CurrencyDetail from "./pages/CurrencyDetail";
import About from "./pages/About";
import Profile from "./pages/Profile";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currencies" element={<CurrenciesList />} />
            <Route path="/currencies/:currency" element={<CurrencyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Navigation Bar (Icons only) */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                <FaHome size={24} />
              </Link>
            </li>
            <li>
              <Link to="/currencies" className="nav-link">
                <FaCoins size={24} />
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <FaInfoCircle size={24} />
              </Link>
            </li>
            <li>
              <Link to="/profile" className="nav-link">
                <FaUser size={24} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
};

export default App;
