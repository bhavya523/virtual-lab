import React from 'react';
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Virtual Lab</h1>
      <p className="home-description">Explore our virtual experiments and discover the world of science!</p>
      <div className="home-buttons">
          <button className="home-button">Browse Experiments</button>
          <button className="home-button">Learn More</button>
      </div>
    </div>
  );
}

export default Home;

