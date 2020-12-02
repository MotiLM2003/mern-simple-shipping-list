import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import ShoppingList from './/ShoppingList/ShoppingList';
import ItemModel from './ItemModel/ItemModel';

const temp = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};
const App = ({ itemModel }) => {
  return (
    <div className='App'>
      <nav
        className='mb-5 navbar navbar-dark bg-dark'
        style={{ color: '#fff' }}
      >
        <div className='container'>
          <a className='navbar-brand'>Shoping List</a>
        </div>
      </nav>
      <ShoppingList />

      {itemModel.isOpen && (
        <ItemModel
          variants={temp}
          initial='hidden'
          animate='visible'
          exit='hidden'
        ></ItemModel>
      )}
    </div>
  );
};

const stateToProps = (state) => ({
  itemModel: state.itemModel,
});

export default connect(stateToProps)(App);
