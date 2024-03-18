import {StyleSheet} from 'react-native';
import {fonts} from '../../../theme/FontFamily';
import {width, widthToDp} from '../../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  fancyGrad: {
    width: '100%',
    // flexDirection: 'row'
  },
  fancyGradBorder: {
    borderBottomColor: 'transparent',
    // borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fancyGradBorderChild: {
    flex: 1,
    height: 1,
  },
});

export {styles};
