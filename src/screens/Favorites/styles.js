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
  headerText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 17,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: widthToDp(40),
    height: 35,
  },

  myOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    // marginTop: 15,
    marginVertical: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },

  myOrderSubContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  productContainer: {
    backgroundColor: '#303F43',
    borderRadius: 8,
  },

  productImg: {
    width: widthToDp(20),
    height: heightToDp(20),
  },
  productName: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 22,
    marginTop: 10,
  },
  productPrice: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 22,
    color: Colors.GREEN,
  },
  qtyContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    marginLeft: 10,
  },

  qty: {
    fontSize: 22,
    fontFamily: fonts.URBANIST_REGULAR,
    color: Colors.GREEN,
  },
  orderTitle: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 20,
    color: Colors.WHITE,
    marginLeft: 15,
  },
  quantityTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 10,
  },
  headerTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 20,
  },
  pricingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  priceStyle: {
    marginLeft: 10,
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 18,
  },

  grandTotalContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  totalText: {
    // marginLeft: 10,

    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 20,
  },
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
  sliderGradBar: {
    backgroundColor: 'transparent',
    // borderRadius: 15,
    width: widthToDp(60),
    position: 'absolute',
    height: 8,
    marginTop: 0,
    top: 16,
    left: 15,
    zIndex: -1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  percentItemPrice: {
    color: Colors.GREEN,
    fontWeight: 'bold',
    fontSize: screenToTextSize(5),
  },
  totalPrice: {
    // marginLeft: 10,

    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 20,
  },
  customizeTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 22,
  },

  //All order section Work====================================

  circleGradient: {
    // justifyContent: 'center',

    width: widthToDp(42),
    height: heightToDp(22),

    alignItems: 'center',
    backgroundColor: '#00000077',
    borderRadius: 22,
  },

  billContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalBillBox: {
    borderRadius: 22,
    marginLeft: 10,
    height: heightToDp(25),

    width: widthToDp(46),
    alignItems: 'center',
    justifyContent: 'center',
  },

  yourShareBox: {
    borderRadius: 22,
    height: heightToDp(25),
    marginRight: 10,

    width: widthToDp(46),
    alignItems: 'center',
    justifyContent: 'center',
  },
  billTxt: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 18,
    marginTop: 10,
  },
  amountTxt: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: screenToTextSize(8),
    marginTop: getPlatformSpecificValue(3, -5),
  },
  shareABill: {
    fontSize: screenToTextSize(6),
    fontFamily: fonts.URBANIST_BOLD,
    marginTop: getPlatformSpecificValue(15, 10),
  },

  //Nested Route for All routes

  nestedtabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: widthToDp(25),
    height: 35,
  },

  linearBack: {
    borderRadius: 20,
    flexWrap: 'wrap',
    // width: '90%',
    marginTop: 10,
    // padding: 10,
    // b
  },
  circleTwoGradient: {
    margin: 1,
    // width: '100%',
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

  //Select by items Section

  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  scroll: {
    alignItems: 'center',
    width: '100%',
  },
  userName: {
    marginLeft: 15,
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.WHITE,
    fontSize: 16,
  },

  itemDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: fonts.URBANIST_BOLD,
  },

  sharedItemContainer: {
    // backgroundColor: '#113752',
    width: widthToDp(95),
    // paddingHorizontal: 45,

    flexDirection: 'row',
    // paddingVertical: 10,

    marginTop: 10,
  },
  sharedItemContainerTwo: {
    padding: 5,

    flexDirection: 'row',
    alignItems: 'center',
    width: widthToDp(95),
    justifyContent: 'space-between',
  },

  mainHeadings: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: Colors.WHITE,
    fontSize: 14,
  },
  quantity: {
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.WHITE,
    fontSize: 14,
  },
  firstPrice: {
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.WHITE,
    fontSize: 16,
  },
  price: {
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.GREEN,
    fontSize: 18,
  },
  itemProduct: {
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.WHITE,
    fontSize: 16,
  },
  totalPrice: {
    fontFamily: fonts.URBANIST_MEDIUM,
    color: Colors.GREEN,
    fontSize: 16,
  },
  productImgContainer: {
    backgroundColor: '#3F3F54',
    // padding: 10,
    width: widthToDp(13),
    alignItems: 'center',
    borderRadius: 16,
    // marginLeft: 10,
  },
  pricing: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthToDp(15),
  },
  selectAll: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  selectAllTxt: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: fonts.URBANIST_BOLD,
  },
  listStyle: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
  horizontalListStyle: {
    marginTop: 10,
  },
  verticalPrdListItem: {
    marginHorizontal: 10,
    width: widthToDp(95),
    height: heightToDp(35),
    marginBottom: 15,
    // alignSelf: 'auto',
    backgroundColor: '#7074C422',
    borderColor: '#fff4',
    borderWidth: 1,
    borderRadius: 26,
    alignItems: 'center',
    gap: 4,
    justifyContent: 'space-between',
    overflow: 'hidden',
    flexDirection: 'row',
    leftCont: {
      width: widthToDp(60),
      // alignItems: 'center',
      // backgroundColor: 'brown',
      paddingHorizontal: 15,
    },
    prdNameCont: {
      // backgroundColor: 'red',
      flexDirection: 'column',
      // width:
      // alignItems: 'center',
      // height: 40,
    },
    prdName: {
      color: 'white',
      fontSize: screenToTextSize(5.2),
      fontFamily: fonts.URBANIST_BOLD,
      justifyContent: 'center',
      lineHeight: 26,
      // position: 'relative',
      // top: -5,
      // marginTop: 10,
      // backgroundColor: '#f0f4',
    },
    prdRestName: {
      color: 'white',
      fontSize: screenToTextSize(3.5),
      fontFamily: fonts.URBANIST_REGULAR,
      justifyContent: 'center',
      lineHeight: 26,
      // position: 'relative',
      // top: -5,
      // marginTop: 10,
      // backgroundColor: '#f0f4',
    },
    prdVisit: {
      color: 'white',
      fontSize: screenToTextSize(3.5),
      fontFamily: fonts.URBANIST_REGULAR,
      justifyContent: 'center',
      lineHeight: 26,
      marginBottom: 10,
      // position: 'relative',
      // top: -5,
      // marginTop: 10,
      // backgroundColor: '#f0f4',
    },
    prdDesc: {
      color: 'white',
      fontSize: screenToTextSize(2.8),
      fontFamily: fonts.URBANIST_MEDIUM,
      lineHeight: 26,
      // height: screenToTextSize(4),
      // flex: 1,
      width: widthToDp(50),
      justifyContent: 'center',
      position: 'relative',
      top: -5,
      // backgroundColor: '#f0f4',
    },
    prdRatingCont: {
      marginLeft: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    prdRating: {
      color: 'white',
    },
    prdRatingStar: {},
    prdAllergiesCont: {
      flexDirection: 'row',
      // backgroundColor: '#ff00ff',
    },
    prdAllergiesBg: {
      width: 20,
      height: 20,
      marginRight: 5,
      // backgroundColor: '#ff00ff',
      // flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center'
    },
    prdAllergies: {
      width: 16,
      height: 16,
      margin: 5,
      padding: 10,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    prdPricingCont: {
      flexDirection: 'row',
      bottom: 5,
      // marginBottom: 3,
    },
    rightCont: {
      width: '30%',
      // backgroundColor: 'green',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 15,
      position: 'relative',
    },
    imgCont: {
      backgroundColor: '#88888855',
      borderRadius: 20,
      // marginRight: 10,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
      paddingHorizontaal: screenToTextSize(10),
      borderColor: Colors.GREEN,
      borderWidth: 2,
      // paddingHorizontal: screenToTextSize(10),
    },
    image: {
      width: screenToTextSize(25),
      height: screenToTextSize(25),
      objectFit: 'contain',
      // backgroundColor: '#88888855',
      borderRadius: 15,
    },
    itemHeart: {
      backgroundColor: '#fff',
      width: 25,
      height: 25,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      right: 10,
    },
  },
  menuItemSmallbox: {
    marginHorizontal: 5,
    width: screenToTextSize(40),
    height: screenToTextSize(55),
    alignSelf: 'center',
    backgroundColor: '#7074C422',
    borderColor: '#fff4',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    gap: 4,
    justifyContent: 'space-between',
    overflow: 'hidden',
    imgCont: {
      // backgroundColor: '#ff0',
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
      paddingHorizontaal: screenToTextSize(10),
    },
    image: {
      width: screenToTextSize(35),
      height: screenToTextSize(35),
      objectFit: 'contain',
      backgroundColor: '#88888855',
      borderRadius: 15,
      borderColor: Colors.GREEN,
      borderWidth: 2,
    },
    nameCont: {
      // flex: 1,
      justifyContent: 'space-between',
      width: '100%',
      height: screenToTextSize(10),
      alignItems: 'start',
      flexDirection: 'column',
      paddingHorizontal: screenToTextSize(2),
      position: 'relative',
      top: -20,
      // backgroundColor: '#ff0',
    },
    nameContChild: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative',
      width: '100%',
      top: -10,
      // backgroundColor: '#ff0',
    },
    itemName: {
      color: '#fff',
      fontSize: screenToTextSize(3.5),
      fontFamily: fonts.URBANIST_BOLD,
      marginBottom: 5,
    },
    ratingCont: {
      // flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'relative',
      marginRight: 10,
      // width: '100%',
      // height: screenToTextSize(12),
      // paddingHorizontal: screenToTextSize(2),
    },
    rating: {
      color: Colors.WHITE,
      fontSize: screenToTextSize(4),
      fontFamily: fonts.URBANIST_BOLD,
      width: 25,
      textAlign: 'center',
      alignItems: 'center',
      // backgroundColor: '#f00',
    },
    ratingIcon: {
      // position: 'absolute',
    },
    itemPrice: {
      color: Colors.GREEN,
      fontFamily: fonts.URBANIST_EXTRABOLD,
      fontSize: screenToTextSize(5),
    },
  },
});
export {styles};
