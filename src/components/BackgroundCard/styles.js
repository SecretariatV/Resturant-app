import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';

const styles = StyleSheet.create({
  circleGradient: {
    margin: 2,
    // width: 300,
    width: width * 0.868,

    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 20,
  },
  circleTwoGradient: {
    margin: 1,
    width: '100%',
    // padding: 10,
    // height: 60,
    alignSelf: 'center',
    paddingVertical: 5,
    backgroundColor: '#1A415822',
    // backgroundColor: 'transparent',

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearBack: {
    borderRadius: 20,
    flexWrap: 'nowrap',
    width: '100%',
    // backgroundColor: '#000000',
  },
  linearMenu: {
    borderRadius: 20,
    flexWrap: 'nowrap',
    width: 45,
  },
  menuCondition: {
    width: 60,
  },

  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 18,
  },
});
export {styles};
