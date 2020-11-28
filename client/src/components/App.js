import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
import AppNavbar from './AppNavbar';
import ShoppingList from './/ShoppingList/ShoppingList';
import ItemModel from './ItemModel/ItemModel';

const App = () => {
  return (
    <div className='App'>
      <AppNavbar />

      <ShoppingList />

      <ItemModel header='This is a header-1'>
        and this is the content-1!
      </ItemModel>
    </div>
  );
};

export default App;
