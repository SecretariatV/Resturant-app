import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginRight: 25,
  },
  sizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1C27',
    // marginLeft: widthToDp(1.5),
    height: heightToDp(7),
    width: widthToDp(7),
    borderRadius: 10,
  },

  sizeText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 16,
  },

  counterTxt: {
    margin: 30,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_SEMIBOLD,
    fontSize: 18,
  },
  selected: {
    backgroundColor: Colors.GREEN,
  },
  selectedText: {
    color: Colors.BLACK,
    fontFamily: fonts.URBANIST_EXTRABOLD,
  },
});
export {styles};
