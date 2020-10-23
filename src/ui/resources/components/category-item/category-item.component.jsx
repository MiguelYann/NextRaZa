import React from 'react';
import { withRouter } from 'react-router-dom';
import './category-item.style.scss';

const CategoryItem = ({ linkUrl, title, imageUrl, history, match }) => {

const goToSection = () =>  {
  console.log(match);
    history.push(`${match.url}${linkUrl}`)
  }
  return (
    <div
    onClick={goToSection}
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

export default withRouter(CategoryItem);
