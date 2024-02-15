import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';

const percentSize = size => {
  let scrensize = widthToDp(100);
  return (size * scrensize) / 100;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
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
  },
  byeTxt: {
    color: '#01CA78',
    fontFamily: fonts.URBANIST_SEMIBOLD,
    fontSize: percentSize(5),
    marginTop: widthToDp(7),
    textAlign: 'center',
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
    backgroundColor: '#00000099',
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
    marginTop: widthToDp(5),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  greenDot: {
    borderRadius: 12,
    flexWrap: 'nowrap',
    width: width * 0.128,
  },

  wrapper: {},
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
});
export {styles};
