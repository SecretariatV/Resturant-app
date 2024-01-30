import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  forgotTxt: {
    color: Colors.WHITE,
    fontSize: 30,
    fontFamily: fonts.URBANIST_SEMIBOLD,
    marginTop: 10,
  },
  joinWrapper: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: 20,
  },
  joinTxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#fff',
  },
  underJoinTxt: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    marginBottom: 15,
    lineHeight: 18,
  },
  circleGradient: {
    margin: 1,

    paddingVertical: 10,
    // paddingHorizontal: 15,
    // alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    borderRadius: 15,
  },
  regFormScrollView: {
    marginBottom: 5,
  },
});
export {styles};
