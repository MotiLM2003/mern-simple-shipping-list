import React from 'react';
import './ItemModel.css';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const ItemModel = ({ itemModel }) => {
  const { header, jsx } = itemModel;
  return (
    <motion.div
      className='item-model-container'
      animate={{ opacity: 1 }}
      transition={{ duration: 5, type: 'tween' }}
    >
      <motion.div
        className='item-model-box'
        initial={{ y: '100vh', x: '-50%' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 110 }}
      >
        <div className='header'>{header}</div>
        <div className='content'>{jsx}</div>
      </motion.div>
    </motion.div>
  );
};

const stateToProps = (state) => ({
  itemModel: state.itemModel,
});

export default connect(stateToProps)(ItemModel);
