import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  shadowLight: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  defaultFontStyle: {
    color: '#000',
  }
});

export default commonStyles;
