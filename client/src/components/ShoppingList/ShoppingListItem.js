import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, ListGroupItem } from 'reactstrap';
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
        <Button
          className='update-btn'
          color='success'
          size='md'
          style={{ padding: '.5rem', marginRight: '.5rem' }}
          onClick={() => {
            onUpdate({ id, name });
          }}
        >
          +
        </Button>
        {name}
        <Button
          className='float-right'
          color='danger'
          size='md'
          style={{ padding: '.5rem', marginRight: '.5rem' }}
          onClick={() => {
            onDelete(id);
          }}
        >
          &times;
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShoppingListItem;
