import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {getPlatformSpecificValue} from '../../../utils/helper';
import {screenToTextSize} from '../../../utils/helper';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal:15
    // paddingHorizontal: 15,
  },
  welcomeTxt: {
    fontFamily: fonts.URBANIST_REGULAR,
    color: '#ffffff',
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  shareABillTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: '#ffffff',
    fontSize: 24,
    paddingHorizontal: 5,
    // paddingHorizontal: 15,
  },
  byeTxt: {
    color: '#01CA78',
    fontFamily: fonts.URBANIST_SEMIBOLD,
    fontSize: screenToTextSize(5),
    marginTop: widthToDp(7),
    textAlign: 'center',
    // marginHorizontal: 5
    // paddingHorizontal: ,
  },
  byeTxtTwo: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_REGULAR,
  },
  circleGradient: {
    margin: 1,

    paddingVertical: 2,
    paddingHorizontal: 7,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 10,
  },
  sliderDot: {
    margin: 1,
    // width: 300,
    width: width * 0.128,

    paddingVertical: 3,
    paddingHorizontal: 15,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#18A8BD',
    borderRadius: 15,
  },

  sliderDotTwo: {
    margin: 1,
    width: 8,
    height: 8,
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: '#fff',
    paddingVertical: 3,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 12,
  },

  sliderDotTwoQr: {
    margin: 1,
    width: 8,
    height: 8,
    marginRight: 5,

    paddingVertical: 3,
    borderWidth: 0.5,
    borderColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 12,
  },
  dotContainer: {
    alignItems: 'center',
    marginTop: widthToDp(10),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  greenDot: {
    borderRadius: 12,
    flexWrap: 'nowrap',
    width: width * 0.128,
  },

  wrapper: {
    marginTop: 0,
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  dropdown: {
    // margin: 6,
    // marginLeft: 10,
    height: 30,
    width: 80,
    backgroundColor: '#343852',
    borderRadius: 22,
    // color: '#000',
    paddingHorizontal: 5,
  },
  imageStyle: {
    width: 20,
    height: 12,
    // borderRadius: 12,
    // backgroundColor: 'red',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 2,
    fontFamily: fonts.URBANIST_REGULAR,
    // color: Colors.GREEN,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
export {styles};
