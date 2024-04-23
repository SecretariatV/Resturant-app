import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../../theme/FontFamily';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  circleGradient: {
    margin: 2,

    padding: 10,
    alignItems: 'center',

    borderRadius: 22,
  },
  input: {
    borderBottomColor: 'transparent',

    borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
    height: 1,
    flex: 1,
  },
  btnText: {
    color: Colors.BLACK,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 20,
  },
});
export {styles};
