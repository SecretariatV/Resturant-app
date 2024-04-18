import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../../theme/FontFamily';

const styles = StyleSheet.create({
  circleGradient: {
    margin: 1,

    padding: 15,
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 22,
  },

  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 16,
  },
});
export {styles};
