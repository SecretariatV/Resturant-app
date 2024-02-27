import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  navbarPageTitle: {
    color: Colors.WHITE,
    fontWeight: fonts.URBANIST_BOLD,
    fontSize: 20,
    marginTop: 10,
  },
});
export {styles};
