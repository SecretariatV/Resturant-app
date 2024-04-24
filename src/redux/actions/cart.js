import types from '../types';

export const setCartBtn = res => {
  console.log('cart respons', res);
  return dispatch => {
    dispatch({
      type: types.CART_BTN,
      payload: res,
    });
  };
};
