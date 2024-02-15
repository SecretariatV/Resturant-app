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
    // right: 10,
    width: 100,
    height: 100,
  },
  cardText: {
    left: 160,
    top: 50,
  },
  container: {
    flex: 1,
    // marginVertical: 3,
  },
  image: {
    flex: 1,
    // width: widthToDp(100),
    // justifyContent: 'center',
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
    // backgroundColor: '#000000c0',
    // borderRadius: 10,
  },
  lightText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontFamily: fonts.URBANIST_THIN,
  },
});
export {styles};
