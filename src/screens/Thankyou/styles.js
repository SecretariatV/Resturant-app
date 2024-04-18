import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
// eslint-disable-next-line no-unused-vars
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';

import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thankyouContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  confettiImage: {
    width: widthToDp(100),
  },
  underConfettiPara1: {
    color: '#fff',
    textAlign: 'center',
    width: widthToDp(80),
    fontSize: screenToTextSize(5),
    marginVertical: 10,
  },
  gradientTextColored: {
    color: '#00FC92',
    fontSize: screenToTextSize(5),
    fontFamily: fonts.URBANIST_BOLD,
    textAlign: 'left',
  },
  gradientTextContainer: {
    // position: 'relative',
  },
  gradientText: {
    fontSize: 32,
    fontFamily: fonts.URBANIST_BOLD,
    // color: '#00FC92',
  },
  bannerImage: {
    top: -20,
    width: widthToDp(100),
    height: heightToDp(100),
  },
  restaurantScrollView: {
    // marginTop: heightToDp(20),
  },
  restaurantContentContainer: {
    justifyContent: 'flex-end',
    height: heightToDp(70),
  },
  resturantContainer: {
    justifyContent: 'flex-end',
    height: heightToDp(100),
  },
  resturantHeaderContainer: {
    flexDirection: 'row',
    width: widthToDp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resturantRatingContainer: {
    flexDirection: 'row',
    marginRight: 15,
  },
  resturantSubContainer: {
    flexDirection: 'row',
    width: widthToDp(100),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resturantName: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 26,
    marginBottom: 10,
    marginLeft: 15,
  },
  resturantDesc: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 16,
    marginHorizontal: 15,
  },
  rating: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 18,
    marginBottom: 10,
    marginRight: 5,
  },
  metaDetails: {
    marginTop: 100,
    marginHorizontal: 15,
  },
  btnsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    // backgroundColor: 'red',
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  to: {
    color: Colors.WHITE,
    marginRight: 15,
    fontSize: 14,
    fontFamily: fonts.URBANIST_MEDIUM,
  },

  headingText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_SEMIBOLD,
    fontSize: 20,
    marginLeft: 5,
  },
  review_btn: {
    backgroundColor: '#282931',
    margin: 1,
    padding: 20,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  review_tag: {
    backgroundColor: Colors.EXCELLENT_COLOR,
    width: widthToDp(25),
    height: 6,
    borderRadius: 4,
    marginLeft: 10,
  },
  rating_no: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: fonts.URBANIST_BOLD,
    marginRight: 10,
  },

  rating_type: {
    color: Colors.WHITE,
    fontSize: 14,
    fontFamily: fonts.URBANIST_SEMIBOLD,
  },

  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: 'lightblue',
  },
  tabText: {
    fontSize: 16,
  },

  label: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 22,
  },
  circleGradient: {
    // margin: 1,
    // width: widthToDp(20),
    paddingVertical: 10,
    paddingHorizontal: widthToDp(4),
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#282A35',
    borderRadius: 15,
  },
  active: {
    // margin: 1,
    // width: widthToDp(20),
    paddingVertical: 10,
    paddingHorizontal: widthToDp(4),
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
  },
  menuTxt: {
    fontSize: 14,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
  },
  menuActiveTxt: {
    fontSize: 14,
    color: Colors.ACTIVE_COLOR,
    fontFamily: fonts.URBANIST_REGULAR,
  },
  reviewList: {
    marginTop: 10,
  },

  btnGradient: {
    margin: 2,

    padding: 10,
    alignItems: 'center',

    borderRadius: 22,
  },
  input: {
    borderBottomColor: 'transparent',

    borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
    height: 1,
    flex: 1,
  },
  btnText: {
    color: Colors.BLACK,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 14,
  },
  billPayment: {
    fontSize: 34,
    color: Colors.BLACK,
    fontFamily: fonts.URBANIST_EXTRABOLD,
  },
  reciept: {
    fontFamily: fonts.URBANIST_SEMIBOLD,
    fontSize: 20,
    color: Colors.WHITE,
    alignSelf: 'flex-start',
    paddingLeft: screenToTextSize(5),
  },
  lottieStyle: {
    width: widthToDp(50),
    height: widthToDp(50),
    margin: 5,
  },
});
export {styles};
