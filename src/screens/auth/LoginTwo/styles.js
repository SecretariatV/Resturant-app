import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  joinWrapper: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    fontSize: 20,
  },
  joinTxt: {
    fontSize: 32,
    fontWeight: '400',
    color: '#fff',
    fontFamily: fonts.URBANIST_MEDIUM,
  },
  underJoinTxt: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    marginBottom: 15,
    lineHeight: 18,
    fontFamily: fonts.URBANIST_REGULAR,
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#00A7F7',
    marginBottom: 15,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 14,
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
  picAvatar: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#ffffff99',
  },
  imageUploader: {
    position: 'relative',
    width: 80,
  },
  imageUploaderPlus: {
    width: 20,
    height: 20,
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  imageUploaderPluscircleGradient: {
    alignItems: 'center',
    backgroundColor: '#ffffff00',
    borderRadius: 15,
    width: 25,
    height: 25,
  },
  imageUploaderPlusText: {
    fontSize: 22,
    color: '#000',
  },
  imageUploaderGrad: {
    borderRadius: 15,
    flexWrap: 'nowrap',
    position: 'relative',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtn: {
    btnTxt: {
      color: '#fff',
    },
  },
  socialLoginBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  socialLoginBtnIcons: {
    width: 65,
    height: 65,
    marginHorizontal: 5,
  },
  alreadyAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    marginBottom: 20,
    textContent: {
      color: '#fff',
    },
    btn: {
      marginHorizontal: 4,
      color: '#00A7F7',
    },
  },
});
export {styles};
