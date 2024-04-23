import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotTxt: {
    color: Colors.WHITE,
    fontSize: 30,
    fontFamily: fonts.URBANIST_MEDIUM,
    marginTop: 10,
  },
  underJoinTxt: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 18,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#FFF',
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 15,
  },

  underlineBlue: {
    color: '#00A7F7',
    marginLeft: 10,
    fontSize: 15,
  },
  underlineContainer: {
    flexDirection: 'row',
  },
  emailTxt: {
    fontSize: 20,
    marginVertical: 25,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    // backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    // borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    // textAlign: 'center',

    borderBottomColor: '#fff',
    // borderBottomWidth: 1,
    // width: '100%',
    // flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cellText: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center',
    fontFamily: fonts.URBANIST_MEDIUM,

    // marginLeft: 30,
    // paddingLeft: 30,
  },

  focusCell: {
    // borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    // alignItems: 'center',
  },

  fancyGrad: {
    // width: '30%',
    height: 60,

    // flexDirection: 'row'
  },
  fancyGradBorderChild: {
    flex: 1,
    height: 1,
  },
  fancyGradBorder: {
    borderBottomColor: 'transparent',
    // borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  code: {
    fontFamily: fonts.URBANIST_BOLD,
    color: Colors.WHITE,
    fontSize: 15,
  },
  codeText: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
export {styles};
