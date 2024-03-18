import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {getPlatformSpecificValue, screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  navbarPageTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
  },
  restaurantFilterBg: {
    height: '100%',
    width: widthToDp(100),
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  // circleGradient: {
  //   margin: 1,
  //   paddingVertical: 5,
  //   paddingHorizontal: 5,
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#00000044',
  //   borderRadius: 15,
  // },
  shareABillTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: '#00FC92',
    fontSize: 22,
    paddingHorizontal: 5,
  },
  saveButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  categoryWiseContainer: {
    justifyContent: 'start',
    flexDirection: 'row',
    height: getPlatformSpecificValue(heightToDp(60), heightToDp(80)),
    // backgroundColor: 'red',
  },
  verticalTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  uselessWrapper: {
    flexDirection: 'row',
    // backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    transform: [{rotate: '-90deg'}],
    position: 'absolute',
    left: -90,
    top: 90,
    width: widthToDp(70),
    height: heightToDp(20),
    // backgroundColor: 'red',
  },
  verticalTabBtnGrad: {
    borderRadius: 10,
    flexWrap: 'wrap',
    width: '90%',
    marginTop: 10,
  },
  verticalTabBtns1: {
    width: widthToDp(25),
    // paddingVertical: 10,
  },
  verticalTabBtns2: {
    width: widthToDp(40),
  },
  flatlistWrapper: {
    width: widthToDp(80),
    marginLeft: 45,
    // backgroundColor: 'red',
  },
  itemTypeGrad: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  categoryWiseTabItem: {
    textAlign: 'center',
    width: '100%',
    fontSize: screenToTextSize(4),
    color: '#fff7',
  },
  categoryWiseTabItemActive: {
    color: '#000',
    textAlign: 'center',
    width: '100%',
    fontSize: screenToTextSize(4),
    paddingVertical: heightToDp(1.5),
  },
  circleGradient: {
    margin: 1,
    // width: '30%',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 15,
  },
  filterHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthToDp(90),
  },
  shareABillTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: '#00FC92',
    fontSize: 22,
    paddingHorizontaal: 5,
  },
  saveButton: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,
  },
  restaurantFilterBg: {
    height: '100%',
    width: widthToDp(100),
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  restaurantFilterContainer: {
    borderRadius: 25,
    marginTop: 20,
    minHeight: 500,
    paddingHorizontal: 10,
    bottom: 0,
    zIndex: 20,
  },
  filterHeadingText: {
    color: '#fff',
    fontSize: 16,
  },
  cuisineTypeBtns: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  cuisineTypeBtnsContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterSection: {
    marginBottom: 10,
    flexDirection: 'row',
    // width: '100%',
  },
  priceRange: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  priceRangeLabelBottom: {
    marginBottom: 20,
  },
  circleTwoGradient: {
    margin: 1,
    width: '100%',
    // padding: 10,
    // height: 60,
    alignSelf: 'center',
    paddingVertical: 15,
    
    // backgroundColor: '#1A4158',
    // backgroundColor: '#345B61',
    // backgroundColor: '#FFFFFF',

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuGradient: {
    margin: 1,
    width: 45,
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearBack: {
    borderRadius: 20,
    flexWrap: 'wrap',
    width: '90%',
    marginTop: 2,
    // padding: 10,
    // b
  },

  verticalLinearBack: {
    width: '40%',
  },
  productContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    width: '80%',
    // alignItems: 'center',
    marginVertical: 15,
  },
  productVerticalContainer: {
    flexDirection: 'row',

    height: 20,
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  productTxt: {
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.WHITE,
    fontSize: 18,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  ratingTxt: {
    fontFamily: fonts.URBANIST_REGULAR,
    color: Colors.WHITE,
    marginRight: 5,
  },
  ratingTxtVertical: {
    marginLeft: 10,
  },
  starImg: {
    width: 11,
    height: 11,
  },
  price: {
    color: Colors.GREEN,
    fontSize: 22,
    fontFamily: fonts.URBANIST_BOLD,
  },
  horizontalListStyle: {
    marginTop: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },

  subContainer: {
    width: '40%',
    flexDirection: 'column',
  },
});
export {styles};
