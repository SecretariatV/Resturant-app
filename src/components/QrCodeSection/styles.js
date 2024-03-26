import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  qrCodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    width: widthToDp(85),
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  textGrad: {
    color: Colors.WHITE,
    fontSize: 22,
    fontFamily: fonts.URBANIST_BOLD,
    textAlign: 'center',
    marginBottom: 10,
  },
  qrSub: {
    backgroundColor: '#fff',
    height: heightToDp(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  qrImg: {
    width: widthToDp(40),
    height: heightToDp(30),
    resizeMode: 'contain',
  },

  copyContainer: {
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: heightToDp(15),
    borderRadius: 24,
    paddingHorizontal: 10,
  },
  code: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '20%',
    padding: 5,
    alignItems: 'center',
    borderRadius: 6,
  },
  codeText: {
    color: Colors.WHITE,
  },
  copyCode: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyText: {color: Colors.WHITE, marginRight: 10},
});
export {styles};
