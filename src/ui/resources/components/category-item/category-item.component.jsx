import React from 'react';
import { withRouter } from 'react-router-dom';
import './category-item.style.scss';

const CategoryItem = ({ linkUrl, title, imageUrl, history, match }) => {

const goToSection = () =>  {
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
      </div>
    </div>
  );
};

export default withRouter(CategoryItem);
