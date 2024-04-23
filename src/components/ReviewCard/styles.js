import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import {widthToDp} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  review_container: {
    flexDirection: 'row',
  },
  name: {
    color: Colors.WHITE,
    marginBottom: 5,
    fontSize: 16,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  review_detail: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 13,
    marginTop: 5,
  },
  time: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 14,
    marginLeft: widthToDp(2),
  },
});
export {styles};
