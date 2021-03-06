import React, { Component } from 'react';

import dummySections from '../../../../data/mocks/dummy_data';
import CategoryItem from '../category-item/category-item.component';

class CategoryList extends Component {
  
  state = {
    sections: dummySections,
  };

  render() {
    const { sections } = this.state;
    return (
      <div className="menu">
        {sections.map(({ id, ...sectionProps }) => (
          <CategoryItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default CategoryList;
