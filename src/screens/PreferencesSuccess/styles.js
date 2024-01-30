import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  congratulation: {
    color: Colors.WHITE,
    fontSize: 26,
    fontFamily: fonts.URBANIST_BOLD,
    marginTop: 15,
  },
  customizedTxt: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: fonts.URBANIST_REGULAR,
    marginTop: 15,
    marginHorizontal: 15,
    textAlign: 'center',
  },

  saveButton: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,
  },
  closeButton: {
    fontSize: 16,
    fontFamily: fonts.URBANIST_SEMIBOLD,
  },
});
export {styles};
