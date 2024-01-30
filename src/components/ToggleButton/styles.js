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
    // margin: 1,
    // width: widthToDp(20),
    paddingVertical: 10,
    paddingHorizontal: widthToDp(4),
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#282A35',
    borderRadius: 15,
  },
  active: {
    // margin: 1,
    // width: widthToDp(20),
    paddingVertical: 10,
    paddingHorizontal: widthToDp(4),
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  menuTxt: {
    fontSize: 14,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
  },
  menuActiveTxt: {
    fontSize: 14,
    color: Colors.ACTIVE_COLOR,
    fontFamily: fonts.URBANIST_REGULAR,
  },
});

export {styles};
