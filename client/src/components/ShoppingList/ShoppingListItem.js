import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, ListGroupItem } from 'reactstrap';
import { motion } from 'framer-motion';

const ShoppingListItem = ({ item, onUpdate, onDelete }) => {
  const { id, name } = item;

  return (
    <motion.ListGroupItem
      className='shopping-list-item'
      animate={{ opacity: 1 }}
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
    </motion.ListGroupItem>
  );
};

export default ShoppingListItem;
