import types from '../types';

const initialState = {
  user: null,
  //   Error: null,
  //   userData: null,
};
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {...state, user: action.payload};

    case types.USER_DATA:
      return {...state, userData: action.payload};

    default:
      return state;
  }
};
