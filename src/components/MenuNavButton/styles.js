import {Platform, StyleSheet} from 'react-native';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  menuBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    borderRadius: 10,
    opacity: 0.6,
  },
  touchableBtnIMG: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableBtnSVG: {
    // borderRadius: 10,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  menuIcon: {
    width: widthToDp(10),
    height: heightToDp(10),
  },
  circleTwoGradient: {
    margin: 1,
    width: widthToDp(15),
    height: heightToDp(15),
    padding: 5,
    backgroundColor: '#00000000',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearMenu: {
    borderRadius: 15,
    flexWrap: 'nowrap',
    width: widthToDp(15),
    height: heightToDp(15),
  },
});
export {styles};
