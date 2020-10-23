import React from 'react';
import './category-item.style.scss';

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <div
      className="menu-item background-image"
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

export default CategoryItem;
