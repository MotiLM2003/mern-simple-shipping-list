import { ItemsModelTyps } from '../actions/types';

const intialState = {
  isOpen: false,
  header: '',
  jsx: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ItemsModelTyps.SET_STATUS: {
      return { ...state, isOpen: action.payload };
    }

    case ItemsModelTyps.UPDATE_MODEL: {
      return { ...action.payload };
    }
    // case ItemsModelTyps.CLOSE_MODEL: {
    //   return state;
    // }
  }

  return state;
};
