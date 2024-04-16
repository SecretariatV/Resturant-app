import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';
import {screenToTextSize} from '../../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  outerBox: {
    width: '100%',
    // backgroundColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#FFFFFFAA',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBox: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderWidth: 1,
    paddingVertical: heightToDp(18),
    // paddingHorizontal: 30,
    borderColor: '#FFFFFF3a',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthToDp(9),
  },
  startedTxt: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: screenToTextSize(8),
    textAlign: 'center',
  },
  startedTxtTwo: {
    color: Colors.SECONDARY,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: screenToTextSize(8),
  },
  startedTxtThree: {
    marginTop: 20,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: screenToTextSize(5.5),
    textAlign: 'center',
  },
});

export {styles};
