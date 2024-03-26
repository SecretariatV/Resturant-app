import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  navbarPageTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 16,
    marginTop: 10,
    alignSelf: 'center',
  },
  ingredientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },

  ingredientSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  quantityTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 16,
    marginTop: 10,

    textAlign: 'center',
    // marginLeft: 10,
    width: '40%',
  },
  headerTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 20,
    // marginTop: 10,
    // alignSelf: 'center',
  },
  pricingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    // alignItems: 'center',

    // paddingHorizontal: 10,
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    // paddingHorizontal: 15,
    alignItems: 'flex-start',
  },
  priceStyle: {
    marginLeft: 10,
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 18,
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

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },

  counterMain: {
    width: '40%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minus: {
    height: heightToDp(7),
    width: widthToDp(7),
    borderRadius: 8,
  },
  plus: {
    height: heightToDp(7),
    width: widthToDp(7),
    borderRadius: 8,
    backgroundColor: Colors.GREEN,
  },
});
export {styles};
