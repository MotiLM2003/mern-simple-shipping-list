import React from 'react';
import { itemsContainerVariants, itemsVariants } from './motionVarirants';
import { motion, AnimatePresence } from 'framer-motion';

const ShoppingListItem = ({ item, onUpdate, onDelete }) => {
  const { id, name } = item;

  return (
    <AnimatePresence>
      <motion.div
        className='list-group-item shopping-list-item'
        variants={itemsVariants}
      >
        <button
          className='btn btn-success update-btn '
          style={{
            padding: '.5rem',
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
          className='float-right btn-danger '
          style={{ padding: '.5rem', marginRight: '.5rem' }}
          onClick={() => {
            onDelete(id);
          }}
        >
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShoppingListItem;
