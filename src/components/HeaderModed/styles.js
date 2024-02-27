import {Platform, StyleSheet} from 'react-native';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import { getPlatformSpecificValue } from '../../utils/helper';

const styles = StyleSheet.create({
  headerHoc: {
    position: 'absolute',
    top: 0,
  },
  headerHocNoBanner: {
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
  headerContainerNoBanner: {
    paddingHorizontal: getPlatformSpecificValue(15, 0),
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
    alignItems: 'flex-start',
  },
  slotCenter: {
    width: '60%',
    alignItems: 'center',
  },
  slotRight: {
    width: '20%',
    alignItems: 'flex-end',
  },
});
export {styles};
