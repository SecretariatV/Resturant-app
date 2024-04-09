import types from '../types';

export const addError = res => {
  return dispatch => {
    dispatch({
      type: types.SUCCES_FAIL,
      payload: res,
    });
  };
};

export const setUser = res => {
  return dispatch => {
    dispatch({
      type: types.SIGN_IN,
      payload: res,
    });
  };
};

export const setQrCode = res => {
  console.log('action respons', res);
  return dispatch => {
    dispatch({
      type: types.QR_CODE,
      payload: res,
    });
  };
};
export const setRequestBtn = res => {
  console.log('REQ respons', res);
  return dispatch => {
    dispatch({
      type: types.REQUEST,
      payload: res,
    });
  };
};
