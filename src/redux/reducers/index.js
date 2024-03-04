// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {combineReducers} from 'redux';
// import types from '../types';
// import {auth} from './auth';

// const appReducer = combineReducers({
//   auth: auth,
//   //   lisitng: listingReducer,
//   //   snackbar: snackReducer,
// });

// const rootReducer = (state, action) => {
//   //   if (action.type == types.SIGN_OUT) {
//   //     AsyncStorage.removeItem('persist:root');
//   //     return appReducer(undefined, action);
//   //   }
//   return appReducer(state, action);
// };
// export default rootReducer;
import {combineReducers} from 'redux';
import {auth} from './auth';

const rootReducer = combineReducers({
  auth,
});
export default rootReducer;
