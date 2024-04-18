import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginTop: 20,
  },
  profileName: {
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_LIGHT,
    fontSize: 18,
    marginTop: 15,
  },
  username: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 22,
    marginTop: widthToDp(0.5),
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: widthToDp(1.5),
    justifyContent: 'center',
  },
  circleGradientTwo: {
    margin: 5,

    alignItems: 'center',

    borderRadius: 22,
  },

  levelBarColorBg: {
    backgroundColor: '#00ffa8',
    width: screenToTextSize(21),
    position: 'relative',
    borderRadius: 50,
    height: screenToTextSize(3),
    padding: 2,
    marginLeft: widthToDp(0.5),
  },
  levelBarBgDark: {
    backgroundColor: '#012a25',
    width: screenToTextSize(20),
    position: 'relative',
    borderRadius: 50,
    height: screenToTextSize(2),
  },
  levelGradient: {
    borderRadius: 10,
    flexWrap: 'nowrap',
    height: 3,
    // width: '50%',
  },
  activeOrderBarContainer: {
    alignItems: 'start',
  },
  activeOrderText: {
    fontSize: screenToTextSize(3),
    color: Colors.GREEN,
    height: 15,
  },
  activeOrderBar: {
    marginLeft: 5,
  },
  activeOrderBarbg: {
    backgroundColor: '#012a25',
    borderRadius: 15,
    width: '100%',
    position: 'absolute',
    height: 3,
    marginTop: 2,
  },
  bio: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
  social: {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    width: widthToDp(9),
    height: widthToDp(9),
    borderRadius: widthToDp(4.5),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  socialContainer: {
    flexDirection: 'row',
  },
  arText: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 22,
    color: Colors.WHITE,
    marginLeft: 15,
    marginTop: 15,
  },
  image: {},
});
export {styles};
