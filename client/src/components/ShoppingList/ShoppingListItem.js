import React from 'react';
import { itemsContainerVariants } from './motionVarirants';
import { motion, AnimatePresence } from 'framer-motion';

export const itemsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: { x: -1000 },
};

const ShoppingListItem = ({ item, onUpdate, onDelete }) => {
  const { id, name } = item;
  console.log(item.id);
  return (
    <AnimatePresence>
      <motion.div
        className='list-group-item shopping-list-item'
        variants={item.variants}
        exit='exit'
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
    </AnimatePresence>
  );
};

export default ShoppingListItem;
