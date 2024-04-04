import {StyleSheet} from 'react-native';
import {width} from '../../utils/Dimensions';
import {getPlatformSpecificValue} from '../../utils/helper';

const styles = StyleSheet.create({
  bgStyle: {
    position: 'absolute',
    bottom:
      width > 375
        ? getPlatformSpecificValue(-15, -32)
        : getPlatformSpecificValue(-15, -32),
    left: 0,
    right: 0,
    elevation: 1,
  },
});
export {styles};
