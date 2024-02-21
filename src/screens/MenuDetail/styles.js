import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB',
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
});
export {styles};
