import React from 'react';
import './shop.component.scss';
import fakeCollections from '../../../data/mocks/products';
import PreviewProductList from '../../resources/components/preview-product-list/preview-product-list.component';

export class Shop extends React.Component {
  
  constructor(props) {
    super(props); //DEPRECIATE
  }

  state = {
    collections: fakeCollections,
  };

  render() {
    return (
      <div className="">
        {this.state.collections.map(({id, ...otherCollections}) => (
          <PreviewProductList key={id} {...otherCollections} />
        ))}
      </div>
    );
  }
}
