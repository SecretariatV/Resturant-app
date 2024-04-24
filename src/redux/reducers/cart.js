import types from '../types';

const initialState = {
  cartBtnStatus: false,
};
export const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_BTN:
      return {...state, cartBtnStatus: action.payload};
    default:
      return state;
  }
};
