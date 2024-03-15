import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
// import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../theme';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import {screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  improveText: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 24,
    color: Colors.WHITE,
    textAlign: 'center',
    width: '80%',
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
    borderRadius: 16,
    padding: widthToDp(1.5),
  },

  productImg: {
    width: widthToDp(15),
    height: heightToDp(15),
  },
  productName: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_SEMIBOLD,
    fontSize: screenToTextSize(4),
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
  input: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#343440',
    borderRadius: 18,
    // padding: 15,
    paddingTop: 15,
    paddingLeft: 15,
    // width: '80%',
    marginHorizontal: 5,
    minHeight: heightToDp(15), // minimum height for the input
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.86)',
  },
});
export {styles};
