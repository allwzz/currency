import React from "react";
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About This App</h1>
        <p className="about-description">
          This is a currency converter app built with React. The app allows users
          to easily convert currencies, view exchange rates, and get detailed information
          about currencies worldwide. It aims to simplify currency conversion by providing
          accurate, real-time exchange rates.
        </p>
        <div className="about-info">
          <h3>Technologies Used:</h3>
          <ul>
            <li>React</li>
            <li>Axios</li>
            <li>RestCountries API</li>
            <li>ExchangeRate-API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
