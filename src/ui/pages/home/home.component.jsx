import React from 'react';
import './home.style.scss';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">CHEMISES</h1>
            <span className="subtitle">ACHETER</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">PANTALONS</h1>
            <span className="subtitle">ACHETER</span>
          </div>
        </div>


        <div className="menu-item">
          <div className="content">
            <h1 className="title">VESTES</h1>
            <span className="subtitle">ACHETER</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">JEANS</h1>
            <span className="subtitle">ACHETER</span>
          </div>
        </div>

        <div className="menu-item">
          <div className="content">
            <h1 className="title">CHAUSSURES</h1>
            <span className="subtitle">ACHETER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
