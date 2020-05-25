import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div
      className="menu-item"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">ACHETER</span>
      </div>
    </div>
  );
};

export default MenuItem;
