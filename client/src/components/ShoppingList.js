import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';

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
            setItems([...items, { id: uuidv4(), name }]);
          }
        }}
      >
        Add Item
      </Button>

      <ListGroup>
        <TransitionGroup classname='shopping-list'>
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames='fade'>
              <ListGroupItem>
                <Button
                  classname='remove-btn'
                  color='danger'
                  size='md'
                  style={{ padding: '.5rem', marginRight: '.5rem' }}
                  onClick={() => {
                    setItems(items.filter((item) => item.id !== id));
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
