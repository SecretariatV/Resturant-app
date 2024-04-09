import types from '../types';

const initialState = {
  user: null,
  qr: false,
  request: false,
};
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {...state, user: action.payload};

    case types.USER_DATA:
      return {...state, userData: action.payload};

    case types.QR_CODE:
      return {...state, qr: action.payload};
    case types.REQUEST:
      return {...state, request: action.payload};
    default:
      return state;
  }
};
