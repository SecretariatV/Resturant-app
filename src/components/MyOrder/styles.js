import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

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
});
export {styles};
