import {Platform, StyleSheet} from 'react-native';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  headerHoc: {
    position: 'absolute',
    top: 0,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: heightToDp(15),
    marginTop: Platform.OS === 'ios' ? heightToDp(12) : 10,
  },
  slotLeft: {
    width: '20%',
  },
  slotCenter: {
    width: widthToDp(100),
    alignItems: 'center',
  },
  slotRight: {
    width: '20%',
  },
});
export {styles};
