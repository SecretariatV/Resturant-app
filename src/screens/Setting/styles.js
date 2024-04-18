import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  sectionTop: {
    marginTop: widthToDp(3),
  },
  sectionTxt: {
    paddingLeft: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: widthToDp(2),
  },
  separator: {
    marginVertical: 0,
  },
});
export {styles};
