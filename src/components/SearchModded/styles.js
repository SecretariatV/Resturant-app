import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {widthToDp, heightToDp} from '../../utils/Dimensions';

const horizontalPadding = 10;
const styles = StyleSheet.create({
  searchBarBorderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  searchBarGradStyle: {
    borderRadius: 12,
    flexWrap: 'nowrap',
    opacity: 0.8,
  },
  searchBarInnerContainer: {
    margin: 1,

    width: widthToDp(100 - horizontalPadding),
    paddingVertical: 5,
    paddingHorizontal: horizontalPadding,
    alignItems: 'center',
    // ma: 15,
    backgroundColor: '#0008',
    borderRadius: 12,
    flexDirection: 'row',
  },
  searchBarTextInput: {
    width: widthToDp(80 - horizontalPadding),
    color: '#fff',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    height: heightToDp(12),
  },
  btnText: {
    color: '#ffffff',
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 13,
  },
});
export {styles};
