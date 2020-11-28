import React, { useState, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import {
  getItems,
  addItem,
  deleteItem,
  updateItem,
} from '../../actions/itemAction';
import PropsTypes from 'prop-types';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({ getItems, item, addItem, deleteItem, updateItem }) => {
  //   const [items, setItems] = useState(item.items);

  useEffect(() => {
    // getting list of items;

    getItems();
  }, [getItems]);

  const onUpdate = (item) => {
    updateItem(item);
  };

  const onDelete = (id) => {
    deleteItem(id);
  };

  return (
    <Container>
      <Button
        color='dark'
        style={{ marginBottom: '2rem' }}
        onClick={() => {
          const name = prompt('Enter Item');
          if (name) {
            addItem({ id: uuidv4(), name });
          }
        }}
      >
        Add Item
      </Button>

      <ListGroup>
        {item.items.map((item) => {
          return (
            <ShoppingListItem
              key={item.id}
              item={item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </ListGroup>
    </Container>
  );
};

ShoppingList.propTypes = {
  getItems: PropsTypes.func.isRequired,
  addItem: PropsTypes.func.isRequired,
  deleteItem: PropsTypes.func.isRequired,
  updateItem: PropsTypes.func.isRequired,
  item: PropsTypes.object.isRequired,
};

const stateToProps = (state) => ({
  item: state.item,
});

export default connect(stateToProps, {
  getItems,
  addItem,
  deleteItem,
  updateItem,
})(ShoppingList);
