import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: 'red',
    // paddingHorizontal: 15,
  },
  headerText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 17,
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  resturantContainer: {
    justifyContent: 'flex-end',
    height: heightToDp(100),
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
  },
  arContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    width: width,
    bottom: 10,
    right: 5,
    // backgroundColor: 'red',
  },
  arSubContainer: {
    backgroundColor: '#5D5D66',
    padding: 10,
    //   width: widthToDp(20),
    borderRadius: 100,
  },

  menuContainer: {
    justifyContent: 'space-between',

    flexDirection: 'row',
    marginHorizontal: 15,
  },
  up_rating: {
    color: Colors.BLACK,
    fontSize: 14,
    fontFamily: fonts.URBANIST_BOLD,
    paddingRight: 5,
    position: 'absolute',
    left: 29,
    top: 15,
    width: 26,
    textAlign: 'center',
    alignItems: 'center',
    // backgroundColor: '#f0f3'
  },
  menuSubContainer: {
    // flexDirection: 'row',

    alignItems: 'center',
  },
  // review_btn: {
  //   // backgroundColor: 'red',
  // },

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
    // marginBottom: 10,
    marginRight: 5,
    marginLeft: 15,
    backgroundColor: 'red',
  },
  readyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 20,
  },
  lottieStyle: {
    width: 20,
    height: 20,
    margin: 5,
  },
  price: {
    color: Colors.GREEN,
    fontSize: 37,
    fontFamily: fonts.URBANIST_BOLD,
  },
  quantityTxt: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: Colors.WHITE,
    alignSelf: 'center',
    marginVertical: 10,
  },
  readyTxt: {
    fontSize: 14,
    fontFamily: fonts.URBANIST_REGULAR,
    color: Colors.WHITE,
    // marginTop: 10,
    marginLeft: 15,
  },
  backgroundBtnContainer: {
    borderRadius: 36,
    marginTop: 10,
    // paddingVertical: 5,
    // paddingVertical: 200,
    // height: 500,
    // backgroundColor: 'red',
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  levelTxt: {
    marginRight: 10,
    marginTop: 10,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  customBtns: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  reviewList: {
    marginTop: 10,
  },
  headingText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10,
  },
  circleGradient: {
    margin: 1,

    backgroundColor: '#1B3345',
    paddingVertical: 10,
    alignItems: 'center',

    borderRadius: 16,
  },
  btnText: {
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 16,
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
    fontSize: 20,
    color: '#fff',
    fontFamily: fonts.URBANIST_BOLD,
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
