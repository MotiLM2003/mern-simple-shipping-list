import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import itemModelReducer from './itemModelReducer';

export default combineReducers({
  item: itemReducer,
  itemModel: itemModelReducer,
});
