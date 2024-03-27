import {StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../utils/Dimensions';
import {fonts} from '../theme/FontFamily';
import {screenToTextSize} from '../utils/helper';
import Colors from '../constants/Colors';

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
  tabNavMenuBtn: {
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
  requestContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomSheetContainer: {
    height: heightToDp(100),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomImg: {
    height: heightToDp(100),
    width: widthToDp(100),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomView: {
    marginHorizontal: 15,
    marginTop: 20,
  },

  bottomSubView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  requestText: {
    fontSize: 22,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    marginBottom: 15,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {tabNavStyles};
