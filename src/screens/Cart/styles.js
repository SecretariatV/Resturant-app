import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  navbarPageTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 16,
    marginTop: 10,
    // alignSelf: 'center',
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
    // width: 50,
    // backgroundColor: 'green',
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  swipeItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: '100%',
  },
  swipeLeftItem: {
    backgroundColor: '#f00',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
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
    marginTop: 10,
    // padding: 10,
    // b
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

  openButton: {
    fontSize: 20,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
  },
  triedTxt: {
    fontSize: 22,
    marginLeft: 15,
    marginTop: 25,
    fontFamily: fonts.URBANIST_EXTRABOLD,
  },
  customizeTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 22,
    textAlign: 'center',
  },
});
export {styles};
