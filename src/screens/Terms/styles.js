import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  privacyHeading: {
    marginTop: 10,
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 32,
    color: Colors.WHITE,
  },
  privacyDescription: {
    fontSize: 16,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    marginBottom: 10,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: widthToDp(18),
  },
});
export {styles};
