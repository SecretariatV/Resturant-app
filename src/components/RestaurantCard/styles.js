import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  logoImage: {
    position: 'absolute',
    top: 5,
    bottom: 5,
    left: 10,
    width: 100,
    height: 100,
  },
  cardText: {
    left: 160,
    top: 50,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,

    marginVertical: 5,
    padding: 5,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lightText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: fonts.URBANIST_THIN,
  },
  cardContainer: {
    flexDirection: 'row',
    width: widthToDp(60),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: fonts.URBANIST_BOLD,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    color: Colors.WHITE,
    fontSize: 14,
    fontFamily: fonts.URBANIST_BOLD,
    paddingRight: 5,
  },
  starImg: {
    width: 15,
    height: 15,
  },

  location: {
    color: '#CBCBCA',
    marginVertical: 5,
  },

  cuisineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cuisine: {
    color: Colors.WHITE,
    marginVertical: 5,
  },

  arrowContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
export {styles};
