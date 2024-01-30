import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  wrapper: {
    opacity: 0.4,
  },
  lingrad: {
    borderRadius: 15,
    flexWrap: 'nowrap',
  },
  textWrapper: {
    margin: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    borderRadius: 15,
  },
  textContent: {
    fontWeight: '700',
    fontFamily: fonts.URBANIST_BOLD,
  },
});

export {styles};
