import {StyleSheet} from 'react-native';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import Colors from '../../constants/Colors';
import {fonts} from '../../theme/FontFamily';
import {getPlatformSpecificValue, screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  paymentUserBox: {
    backgroundColor: '#272630',
    width: widthToDp(90),
    borderRadius: 8,
    marginHorizontal: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
    marginBottom: 20,
  },
  paymentUserBoxNamenPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: widthToDp(85),
  },
  paymentUserBoxUserName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 15,
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.white,
    fontSize: 16,
  },
  percentItemPrice: {
    color: Colors.green,
    fontWeight: 'bold',
    fontSize: screenToTextSize(5),
  },
  sliderGradBar: {
    backgroundColor: 'transparent',
    // borderRadius: 15,
    width: widthToDp(65),
    position: 'absolute',
    height: 8,
    marginTop: 0,
    top: 16,
    left: 0,
    zIndex: -1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  sliderCounterLabels: {
    color: Colors.white,
    position: 'relative',
    right: 0,
  },

  // myOrderSubContainer: {
  //   flexDirection: 'row',

  //   alignItems: 'center',
  // },
  // productContainer: {
  //   backgroundColor: '#303F43',
  //   borderRadius: 8,
  // },

  // productImg: {
  //   width: widthToDp(20),
  //   height: heightToDp(20),
  // },
  // productName: {
  //   color: Colors.white,
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 22,
  //   marginTop: 10,
  // },
  // productPrice: {
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 22,
  //   color: Colors.green,
  // },
  // qtyContainer: {
  //   flexDirection: 'row',
  //   // backgroundColor: 'red',
  //   alignItems: 'center',
  //   marginLeft: 10,
  // },

  // qty: {
  //   fontSize: 22,
  //   fontFamily: fonts.URBANIST_REGULAR,
  //   color: Colors.green,
  // },
  // orderTitle: {
  //   fontFamily: fonts.URBANIST_BOLD,
  //   fontSize: 20,
  //   color: Colors.white,
  //   marginLeft: 15,
  // },
  // quantityTitle: {
  //   color: Colors.white,
  //   fontFamily: fonts.URBANIST_REGULAR,
  //   fontSize: 16,
  //   marginTop: 10,
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  //   marginLeft: 10,
  // },
  // headerTitle: {
  //   color: Colors.white,
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 20,
  // },
  // pricingTitle: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   paddingHorizontal: 10,
  // },
  // pricingContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   paddingHorizontal: 15,
  //   alignItems: 'center',
  //   // backgroundColor: 'red',
  // },
  // priceStyle: {
  //   marginLeft: 10,
  //   color: Colors.green,
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 18,
  // },

  // grandTotalContainer: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 15,
  //   marginBottom: 10,
  // },
  // totalText: {
  //   // marginLeft: 10,

  //   color: Colors.white,
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 20,
  // },
  // paymentUserBox: {
  //   backgroundColor: '#272630',
  //   width: widthToDp(90),
  //   borderRadius: 8,
  //   marginHorizontal: 16,
  //   paddingHorizontal: 8,
  //   paddingTop: 8,
  //   marginBottom: 20,
  // },
  // paymentUserBoxNamenPriceContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   width: widthToDp(85),
  // },
  // paymentUserBoxUserName: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // sliderGradBar: {
  //   backgroundColor: 'transparent',
  //   // borderRadius: 15,
  //   width: widthToDp(60),
  //   position: 'absolute',
  //   height: 8,
  //   marginTop: 0,
  //   top: 16,
  //   left: 15,
  //   zIndex: -1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  // },
  // percentItemPrice: {
  //   color: Colors.green,
  //   fontWeight: 'bold',
  //   fontSize: screenToTextSize(5),
  // },
  // totalPrice: {
  //   // marginLeft: 10,

  //   color: Colors.green,
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 20,
  // },
  // customizeTxt: {
  //   fontFamily: fonts.URBANIST_EXTRABOLD,
  //   fontSize: 22,
  // },

  // //All order section Work====================================

  // circleGradient: {
  //   // justifyContent: 'center',

  //   width: widthToDp(42),
  //   height: heightToDp(22),

  //   alignItems: 'center',
  //   backgroundColor: '#00000077',
  //   borderRadius: 22,
  // },

  // billContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   marginTop: 10,
  // },
  // totalBillBox: {
  //   borderRadius: 22,
  //   marginLeft: 10,
  //   height: heightToDp(25),

  //   width: widthToDp(46),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // yourShareBox: {
  //   borderRadius: 22,
  //   height: heightToDp(25),
  //   marginRight: 10,

  //   width: widthToDp(46),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // billTxt: {
  //   color: Colors.white,
  //   fontFamily: fonts.URBANIST_BOLD,
  //   fontSize: 18,
  //   marginTop: 10,
  // },
  // amountTxt: {
  //   fontFamily: fonts.URBANIST_BOLD,
  //   fontSize: screenToTextSize(8),
  //   marginTop: getPlatformSpecificValue(3, -5),
  // },
  // shareABill: {
  //   fontSize: screenToTextSize(6),
  //   fontFamily: fonts.URBANIST_BOLD,
  //   marginTop: getPlatformSpecificValue(15, 10),
  // },

  // //Nested Route for All routes

  // nestedtabBarButton: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: 15,
  //   width: widthToDp(25),
  //   height: 35,
  // },

  // linearBack: {
  //   borderRadius: 20,
  //   flexWrap: 'wrap',
  //   // width: '90%',
  //   marginTop: 10,
  //   // padding: 10,
  //   // b
  // },
  // circleTwoGradient: {
  //   margin: 1,
  //   // width: '100%',
  //   // padding: 10,
  //   // height: 60,
  //   alignSelf: 'center',
  //   paddingVertical: 15,
  //   // backgroundColor: '#1A4158',
  //   // backgroundColor: '#345B61',
  //   // backgroundColor: '#FFFFFF',

  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // //Select by items Section

  // itemContainer: {
  //   flexDirection: 'row',
  //   margin: 15,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   width: '90%',
  // },
  // scroll: {
  //   alignItems: 'center',
  //   width: '100%',
  // },
  // userName: {
  //   marginLeft: 15,
  //   fontFamily: fonts.URBANIST_BOLD,
  //   color: Colors.white,
  //   fontSize: 16,
  // },

  // itemDetail: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },

  // price: {
  //   color: Colors.white,
  //   fontSize: 16,
  //   fontFamily: fonts.URBANIST_BOLD,
  // },

  // sharedItemContainer: {
  //   backgroundColor: '#113752',
  //   width: widthToDp(90),

  //   borderWidth: 1,
  //   borderColor: 'grey',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   paddingVertical: 10,
  //   borderRadius: 18,
  //   marginTop: 10,
  // },
  // sharedItemContainerTwo: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // productImgContainer: {
  //   backgroundColor: '#3F3F54',
  //   padding: 10,
  //   width: widthToDp(13),
  //   alignItems: 'center',
  //   borderRadius: 16,
  //   marginLeft: 10,
  // },
  // pricing: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // selectAll: {
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  //   alignSelf: 'flex-end',
  // },
  // selectAllTxt: {
  //   color: Colors.white,
  //   fontSize: 16,
  //   fontFamily: fonts.URBANIST_BOLD,
  // },
});
export {styles};
