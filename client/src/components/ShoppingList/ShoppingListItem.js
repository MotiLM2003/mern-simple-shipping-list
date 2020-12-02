import React from 'react';
import { itemsContainerVariants } from './motionVarirants';
import { motion } from 'framer-motion';

const ShoppingListItem = ({ item, onUpdate, onDelete }) => {
  const { id, name } = item;
  return (
    <motion.div
      className='list-group-item shopping-list-item'
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <button
        className='btn btn-success'
        style={{
          marginRight: '.5rem',
          color: '#fff',
          fontSize: '1.2rem',
        }}
        onClick={() => {
          onUpdate({ id, name });
        }}
      >
        +
      </button>
      {name}
      <button
        className='float-right btn btn-danger'
        style={{ padding: '.5rem', marginRight: '.5rem' }}
        onClick={() => {
          onDelete(id);
        }}
      >
        &times;
      </button>
    </motion.div>
  );
};

export default ShoppingListItem;
