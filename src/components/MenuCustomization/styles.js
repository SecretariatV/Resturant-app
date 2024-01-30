import {StyleSheet} from 'react-native';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {fonts} from '../../theme/FontFamily';

const styles = StyleSheet.create({
  label: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 22,
  },
  circleGradient: {
    margin: 1,
    // width: widthToDp(20),
    paddingVertical: 10,
    paddingHorizontal: 15,
    // alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: '#00000099',
    borderRadius: 15,
  },
});
export {styles};
