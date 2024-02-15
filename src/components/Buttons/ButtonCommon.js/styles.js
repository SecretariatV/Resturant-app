import {StyleSheet} from 'react-native';
import {heightToDp, width} from '../../../utils/Dimensions';
import {fonts} from '../../../theme/FontFamily';

const styles = StyleSheet.create({
  circleGradient: {
    margin: 1,
    // width: 300,
    // width: width * 0.868,

    padding: 10,
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 15,
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
    fontSize: 16,
  },
});
export {styles};
