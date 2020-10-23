import React from 'react';
import './home.style.scss';
import CategoryList from '../../resources/components/category-list/category-list.component';
const HomePage = () => {
  return (
    <div className="homepage">
      <CategoryList />
    </div>
  );
};

export default HomePage;
