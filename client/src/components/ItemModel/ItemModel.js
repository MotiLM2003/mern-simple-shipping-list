import React from 'react';

import './ItemModel.css';

const ItemModel = ({ header, children }) => {
  return (
    <div className='item-model-container'>
      <div className='item-model-box'>
        <div className='header'>{header}</div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default ItemModel;
