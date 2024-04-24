import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../../theme/FontFamily';

const styles = StyleSheet.create({
  circleGradient: {
    margin: 1,
    width: width * 0.868,
    padding: 15,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },

  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 18,
  },
});
export {styles};
