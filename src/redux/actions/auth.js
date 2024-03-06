import types from '../types';

export const addError = res => {
  return dispatch => {
    dispatch({
      type: types.SUCCES_FAIL,
      payload: res,
    });
  };
};

export const setUser = () => {
  return dispatch => {
    dispatch({
      type: types.SIGN_IN,
      payload: 'true',
    });
  };
};
