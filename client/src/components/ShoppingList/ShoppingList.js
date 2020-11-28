import React, { useState, useEffect, useRef } from 'react';
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

import { setStatus, updateModel } from '../../actions/itemModelActions';
import PropsTypes from 'prop-types';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = ({
  getItems,
  item,
  addItem,
  deleteItem,
  updateItem,
  setStatus,
  updateModel,
}) => {
  const newItemNameRef = useRef();

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

  const onUpdateModel = (itemModel) => {
    const model = {
      header: 'Updated Redux header',
      jsx: <div>Hello world</div>,
      isOpen: true,
    };
    updateModel(itemModel);
  };

  // const renderNewItem = () => ({
  //   header: 'Add new item',
  //   jsx: (
  //     <div>
  //       <div>name:</div>
  //       <diiv>
  //         <input type='text' ref={newItemNameRef} />
  //         <button
  //           onClick={() => {
  //             // addItem({name});
  //           }}
  //         >
  //           Add
  //         </button>
  //       </diiv>
  //     </div>
  //   ),
  //   isOpen: true,
  // });

  return (
    <Container>
      <button onClick={onUpdateModel}>Test</button>
      <Button color='dark' style={{ marginBottom: '2rem' }}>
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
  itemModel: state.itemModel,
});

export default connect(stateToProps, {
  getItems,
  addItem,
  deleteItem,
  updateItem,
  setStatus,
  updateModel,
})(ShoppingList);
