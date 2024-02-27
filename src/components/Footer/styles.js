import {Platform, StyleSheet} from 'react-native';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 70 : 10,
    flexDirection: 'row',
    paddingHorizontal: 0,
  },
  skipBtnContainer: {
    alignItems: 'center',
  },
  circleGradient: {
    margin: 2,
    // width: 300,
    width: width * 0.868,

    padding: 15,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 20,
  },
  headerTitle: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 17,
    color: Colors.WHITE,
  },
  input: {
    // backgroundColor: 'white',
    // padding: 10,
    // margin: 5,
    // height: 30,
    // zIndex: -1,
    borderBottomColor: 'transparent',

    borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
    height: 1,
    flex: 1,
  },

  circleTwoGradient: {
    margin: 2,
    width: '100%',
    padding: 15,
    backgroundColor: '#00000099',
    borderRadius: 20,
  },
  visit: {
    margin: 10,
    paddingHorizontal: 7,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#008f68',

    // color: 'transparent',
    fontSize: 12,
  },
  skipBtn: {
    backgroundColor: '#FFFF14',
  },
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'transparent', // Set border color to transparent
  },
  innerContainer: {
    flex: 1,
    margin: 2, // Adjust margin to create space for the border
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  buttonWrapper: {
    position: 'relative',
    borderRadius: 8, // Adjust the border radius as needed
    overflow: 'hidden',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    zIndex: 1, // Ensure text is rendered above the gradient
  },
  absoluteFill: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
export {styles};
