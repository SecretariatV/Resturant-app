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
  circleGradient: {
    margin: 2,
    padding: 10,
    alignItems: 'center',

    borderRadius: 22,
  },
  price: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 31,
  },
  totalPaid: {
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 22,
    marginTop: 5,
  },
  payDate: {
    fontFamily: fonts.URBANIST_THIN,
    fontSize: 16,
  },
  subContainer: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  circleGradientTwo: {
    margin: 1,
    backgroundColor: '#1B1B27',
    padding: 10,
    // alignItems: 'center',

    borderRadius: 22,
  },

  approveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  approveSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export {styles};
