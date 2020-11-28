import React from 'react';
import './ItemModel.css';
import { connect } from 'react-redux';

const ItemModel = ({ itemModel }) => {
  const { header, jsx } = itemModel;
  return (
    <div className='item-model-container'>
      <div className='item-model-box'>
        <div className='header'>{header}</div>
        <div className='content'>{jsx}</div>
      </div>
    </div>
  );
};

const stateToProps = (state) => ({
  itemModel: state.itemModel,
});

export default connect(stateToProps)(ItemModel);
