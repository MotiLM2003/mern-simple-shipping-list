import { v4 as uuidv4 } from 'uuid';
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
} from '../actions/types';

const initialState = {
  items: [
    { id: uuidv4(), name: 'Egges' },
    { id: uuidv4(), name: 'Milk' },
    { id: uuidv4(), name: 'Steak' },
    { id: uuidv4(), name: 'Water' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      return { ...state };
    }
    case ADD_ITEM: {
      const newItems = { items: [...state.items, action.payload] };

      return { ...newItems };
    }

    case DELETE_ITEM: {
      console.log(action.payload);
      return { items: state.items.filter((x) => x.id !== action.payload) };
    }
    default: {
      return state;
    }
  }
};
