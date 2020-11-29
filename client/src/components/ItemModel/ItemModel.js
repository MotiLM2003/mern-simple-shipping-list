import React from 'react';
import './ItemModel.css';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const ItemModel = ({ itemModel }) => {
  const { header, jsx } = itemModel;
  return (
    <motion.div className='item-model-container' animate={{ opacity: 1 }}>
      <motion.div
        className='item-model-box'
        initial={{ y: '100vh' }}
        animate={{ y: 0, x: '-50%' }}
        transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
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
