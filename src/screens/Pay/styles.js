import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  circleGradient: {
    margin: 1,

    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000044',
    borderRadius: 15,
  },
  shareABillTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: '#00FC92',
    fontSize: 22,
    paddingHorizontal: 5,
  },
  saveButton: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,
  },
});
export {styles};
