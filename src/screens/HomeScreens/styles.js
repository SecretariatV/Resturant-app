import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  to: {
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 2,
    btnText: {
      color: '#fff',
    },
  },
});
export {styles};
