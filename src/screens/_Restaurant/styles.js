import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
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
    marginBottom: 10,
    marginLeft: 15,
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
    marginBottom: 10,
    marginRight: 5,
  },
  btnsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    // backgroundColor: 'red',
  },
  timeContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  to: {
    color: Colors.WHITE,
    marginRight: 15,
    fontSize: 14,
    fontFamily: fonts.URBANIST_MEDIUM,
  },

  headingText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
    fontSize: 20,
    marginLeft: 5,
  },
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

  bannerImage: {
    top: -20,
    width: widthToDp(100),
    height: heightToDp(100),
  },
});
export {styles};
