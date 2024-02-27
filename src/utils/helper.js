import {Platform} from 'react-native';
import {widthToDp} from './Dimensions';

export const getPlatformSpecificValue = (iosVal, andVal) => {
  return Platform.OS === 'ios' ? iosVal : andVal;
};


export const screenToTextSize = size => {
  let scrensize = widthToDp(100);
  return (size * scrensize) / 100;
};