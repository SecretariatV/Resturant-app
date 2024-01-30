import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../../theme/FontFamily';

const styles = StyleSheet.create({
  circleTwoGradient: {
    margin: 1,
    width: '100%',
    padding: 15,
    backgroundColor: '#00000099',
    borderRadius: 20,
  },
  linearStyle: {
    borderRadius: 20,
    flexWrap: 'nowrap',
  },
  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 13,
  },
});
export {styles};
