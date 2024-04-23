import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
// eslint-disable-next-line no-unused-vars
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import { getPlatformSpecificValue } from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  bannerImage: {
    // top: -20,
    width: widthToDp(100),
    height: heightToDp(100),
  },
  restaurantScrollView: {
    // marginTop: heightToDp(20),
  },
  restaurantContentContainer: {
    justifyContent: 'flex-end',
    height: heightToDp(70),
    position: 'relative',
    marginTop: getPlatformSpecificValue(-200, -200)
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
    position: 'relative',
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
    color: Colors.BLACK,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 14,
    marginBottom: 10,
    marginRight: 5,
    position: 'absolute',
    left: 26,
    top: 14,
    width: 26,
    textAlign: 'center',
    alignItems: 'center',
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
    fontFamily: fonts.URBANIST_MEDIUM,
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
    fontFamily: fonts.URBANIST_MEDIUM,
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
    fontSize: 16,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  menuActiveTxt: {
    fontSize: 16,
    color: Colors.ACTIVE_COLOR,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  reviewList: {
    marginTop: 10,
  },
  reviewLinear: {
    borderRadius: 16,
    flexWrap: 'nowrap',
    marginVertical: 5,
    marginRight: widthToDp(4),

    alignSelf: 'flex-start',
  },
  aboutLinear: {
    borderRadius: 16,
    flexWrap: 'nowrap',
    marginVertical: 5,
    marginRight: widthToDp(4),

    alignSelf: 'flex-start',
  },

  dropdown: {
    // margin: 16,
    width: 70,
    height: 20,
    // backgroundColor: '#000',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#fff',
    // color: 'red',
    // backgroundColor: 'grey',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  imageStyle: {
    width: 17,
    height: 17,
    // borderRadius: 12,
    // backgroundColor: 'red',
  },
});
export {styles};
