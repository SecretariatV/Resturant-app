import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  box: {
    width: '90%',
    // backgroundColor: 'red',
    height: 492,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTwo: {
    width: '92%',
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    height: 462,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthToDp(5),
  },
  startedTxt: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 32,
  },
  startedTxtTwo: {
    color: Colors.SECONDARY,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 32,
  },
  startedTxtThree: {
    marginTop: 20,
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 20,
  },
});

export {styles};
