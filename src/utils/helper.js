import {Platform} from 'react-native';
import {widthToDp} from './Dimensions';

export const getPlatformSpecificValue = (iosVal, andVal) => {
  return Platform.OS === 'ios' ? iosVal : andVal;
};

export const screenToTextSize = size => {
  let scrensize = widthToDp(100);
  return (size * scrensize) / 100;
};

export const roundToTwoDecimalPlaces = number => {
  const roundedNumber = Math.round(number * 100) / 100; // Round to two decimal places
  const roundedString = roundedNumber.toString(); // Convert the number to a string
  const decimalIndex = roundedString.indexOf('.'); // Find the index of the decimal point
  // If there is no decimal point or only one decimal place, add a trailing zero
  if (decimalIndex === -1) {
    return roundedString + '.00';
  } else if (roundedString.length - decimalIndex === 2) {
    return roundedString + '0'; // Add a trailing zero if there is only one decimal place
  } else {
    return roundedString; // Otherwise, return the rounded string as is
  }
};
