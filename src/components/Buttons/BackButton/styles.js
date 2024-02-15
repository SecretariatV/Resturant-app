import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../../theme/FontFamily';

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
    width: 60,
    // padding: 10,
    // height: 60,
    alignSelf: 'center',
    paddingVertical: 5,
    backgroundColor: '#345B61',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuGradient: {
    margin: 1,
    width: 45,
    padding: 10,
    backgroundColor: '#345B61',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearBack: {
    borderRadius: 20,
    flexWrap: 'nowrap',
    width: 45,
  },
  linearMenu: {
    borderRadius: 20,
    flexWrap: 'nowrap',
    width: 45,
  },
  menuCondition: {
    width: 60,
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
  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 18,
  },
});
export {styles};
