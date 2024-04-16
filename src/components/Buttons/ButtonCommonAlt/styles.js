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
    borderRadius: 20,
  },
  input: {
    borderBottomColor: 'transparent',

    borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    height: 1,
    flex: 1,
  },
  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 16,
  },
});
export {styles};
