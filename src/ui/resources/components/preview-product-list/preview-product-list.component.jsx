import React from 'react';
import PreviewProduct from '../preview-product/preview-product.component';
import './preview-product-list.style.scss';

const PreviewProductList = ({ title, items }) => (
  <div className="products-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...others }) => {
          return <PreviewProduct key={id} {...others} />;
        })}
    </div>
  </div>
);

export default PreviewProductList;
