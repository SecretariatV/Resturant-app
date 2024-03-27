import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  requestContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomSheetContainer: {
    height: heightToDp(100),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomImg: {
    height: heightToDp(100),
    width: widthToDp(100),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  bottomView: {
    marginHorizontal: 15,
    marginTop: 20,
  },

  bottomSubView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  requestText: {
    fontSize: 22,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    marginBottom: 15,
  },
  btnStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {styles};
