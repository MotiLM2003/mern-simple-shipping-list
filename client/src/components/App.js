import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import AppNavbar from './AppNavbar';
import ShoppingList from './/ShoppingList/ShoppingList';
import ItemModel from './ItemModel/ItemModel';
import { connect } from 'react-redux';

const App = ({ itemModel }) => {
  return (
    <div className='App'>
      <AppNavbar />

      <ShoppingList />

      {itemModel.isOpen && (
        <ItemModel header='This is a header-1'>
          and this is the content-1!
        </ItemModel>
      )}
    </div>
  );
};

const stateToProps = (state) => ({
  itemModel: state.itemModel,
});

export default connect(stateToProps)(App);
