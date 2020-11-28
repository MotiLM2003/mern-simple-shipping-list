import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Button, ListGroupItem } from 'reactstrap';

const ShoppingListItem = ({ item, onUpdate, onDelete }) => {
  const { id, name } = item;

  return (
    <ListGroupItem>
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
    </ListGroupItem>
  );
};

export default ShoppingListItem;
