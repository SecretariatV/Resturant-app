import {StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import { screenToTextSize } from '../utils/helper';

const tabNavStyles = StyleSheet.create({
  tabNavigatorBarStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderColor: 'transparent',
    paddingVertical: 10,
    height: heightToDp(20),
  },
  tabNavRequestBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: widthToDp(15),
    position: 'relative',
    left: -20,
  },
  tabNavRequestBtnText: {
    color: '#fff',
    fontSize: screenToTextSize(3),
  },
  tabNavQrCodeScannerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: widthToDp(16),
    height: heightToDp(16),
    backgroundColor: '#fff',
    borderColor: '#0ad6c0',
    borderWidth: 4,
    borderRadius: 50,
    alignContent: 'center',
    position: 'relative',
    top: -10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
export {tabNavStyles};
