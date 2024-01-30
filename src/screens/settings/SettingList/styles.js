import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  subContainer: {
    marginTop: 20,
  },
  title: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 17,
    color: Colors.WHITE,
  },
  subTitle: {
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 16,
    color: Colors.WHITE,
  },
  subTitleTwo: {
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 12,
    color: Colors.WHITE,
  },
});
export {styles};
