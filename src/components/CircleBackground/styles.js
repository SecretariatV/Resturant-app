import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
const forBoth = (anStyles, ioStyles) => {
  return Platform.OS === 'android' ? anStyles : ioStyles;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C2C2C',
    width: widthToDp(7),
    borderRadius: widthToDp(3.5),

    // marginLeft: 5,
  },
});
export {styles};
