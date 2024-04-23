import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  minusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1C27',
    height: heightToDp(10),
    width: widthToDp(10),
    borderRadius: 16,
  },

  counterTxt: {
    // backgroundColor: 'green',
    textAlign: 'center',

    margin: 30,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 18,
  },
});
export {styles};
