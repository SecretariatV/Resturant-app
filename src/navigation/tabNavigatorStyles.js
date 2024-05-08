import {Platform, StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../utils/Dimensions';
import {fonts} from '../theme/FontFamily';
import {screenToTextSize} from '../utils/helper';
import {Colors} from '../theme';
// import Colors from '../constants/Colors';

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
  tabIndicator: {
    color: 'green',
    backgroundColor: 'red',
    // width: 30,
  },
  tabNavRequestBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    width: widthToDp(15),
    position: 'relative',
    left: -20,
    bottom: 5,
  },
  tabNavRequestBtnText: {
    color: '#fff',
    fontSize: screenToTextSize(3.2),
    fontFamily: fonts.URBANIST_MEDIUM,
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
    height: '100%',
    width: widthToDp(100),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  blurContainer: {
    flex: 1,
    backgroundColor: 'red', // Semi-transparent black
  },

  bottomView: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  bottomSubView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',

    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
  },
  tabItem: {
    flex: 1,
    // width: widthToDp(100),
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 10,
    // position: 'absolute',
    // bottom: 10,
    paddingBottom: Platform.OS === 'ios' ? 13 : 0,
    // paddingRight: 5,
    // gap: 10,
    justifyContent: 'center',
    // paddingHorizontal: widthToDp(2),
    // marginLeft: 5,
    // borderBottomWidth: 3,
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    // backgroundColor: `#f0${Math.random(2)}cc`,
    // width: widthToDp(30),
    // backgroundColor: 'red',
    // alignSelf:'csenter'
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,

    // alignItems: 'center',
  },
});
export {tabNavStyles};
