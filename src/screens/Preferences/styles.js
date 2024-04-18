import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveButton: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,
  },

  headerTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 20,
  },
});
export {styles};
