import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  headerText: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 17,
  },

  cardContainer: {
    marginHorizontal: 15,
    justifyContent: 'center',
    width: '90%',
    marginTop: 15,
  },
  cardSubContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    marginTop: 10,
    paddingLeft: 0,
  },
  smallInput: {
    marginTop: 10,
    paddingLeft: 0,
    width: '50%',
  },
});
export {styles};
