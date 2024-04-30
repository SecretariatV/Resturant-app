import {StyleSheet} from 'react-native';
import { fonts } from '../../theme/FontFamily';

const styles = StyleSheet.create({
  circleGradientTwo: {
    margin: 1,
    backgroundColor: '#1B1B27',
    padding: 10,

    borderRadius: 22,
  },
  accordionTitle: {
    color: '#fff',
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 14,
  },
  approveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  approveSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export {styles};
