import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
  sizeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1C27',
    // padding: 10,
    marginLeft: 10,
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
