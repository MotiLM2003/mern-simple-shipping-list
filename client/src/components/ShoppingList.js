import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemAction';
import PropsTypes from 'prop-types';

const ShoppingList = ({ getItems, item }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // getting list of items;

    getItems();
    setItems(item.items);
  }, []);
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
        <TransitionGroup className='shopping-list'>
          {items.map(({ id, name }) => (
            <CSSTransition key={id} timeout={500} classNames='fade'>
              <ListGroupItem>
                <Button
                  className='remove-btn'
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

ShoppingList.propTypes = {
  getItems: PropsTypes.func.isRequired,
  item: PropsTypes.object.isRequired,
};

const stateToProps = (state) => ({
  item: state.item,
});

export default connect(stateToProps, { getItems })(ShoppingList);
