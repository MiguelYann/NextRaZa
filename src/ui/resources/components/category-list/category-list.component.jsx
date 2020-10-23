import React, { Component } from 'react';

import dummySections from '../../../../data/dummy_data';
import CategoryItem from '../category-item/category-item.component';

class CategoryList extends Component {
  state = {
    sections: dummySections,
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="menu">
        {sections.map(({ id, imageUrl, title }) => {
          return <CategoryItem key={id} title={title} imageUrl={imageUrl} />;
        })}
      </div>
    );
  }
}

export default CategoryList;
