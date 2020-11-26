import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button } from 'reactstrap';

const ShoppingList = () => {
  const [items, setItems] = useState(() => {
    return [
      { id: uuidv4(), name: 'Egges' },
      { id: uuidv4(), name: 'Milk' },
      { id: uuidv4(), name: 'Steak' },
      { id: uuidv4(), name: 'Water' },
    ];
  });
  return (
    <Container>
      <Button
        color='dark'
        style={{ marginBottom: '2rem' }}
        onClick={() => {
          const name = prompt('Enter Item');
          if (name) {
            //setItems
            console.log('test');
            setItems([...items, { id: uuidv4(), name }]);
          }
        }}
      >
        {' '}
        Add Item
      </Button>
    </Container>
  );
};

export default ShoppingList;
