import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  select: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 22,
    color: Colors.WHITE,
    marginTop: 15,
  },
  saveButton: {
    // backgroundColor: '#3498db',
    // padding: 15,
    // width: widthToDp(100),
    // width: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    // marginBottom: 100,
    // top: 0,
    bottom: 20,
    // zIndex: 999,
    left: 20,
    right: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerTitle: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 20,
    // marginTop: 10,
    // alignSelf: 'center',
  },
});
export {styles};
