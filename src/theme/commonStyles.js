import {StyleSheet} from 'react-native';
import {Colors} from '.';
import {fonts} from './FontFamily';

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
  },
  headerText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 17,
  },
});

export default commonStyles;
