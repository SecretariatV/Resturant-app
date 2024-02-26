import {Platform, StyleSheet} from 'react-native';
import {heightToDp, width} from '../../utils/Dimensions';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 4,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'row',
  },

  labelValue: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  labelValueText: {
    fontSize: 11,
  },

  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '100%',
    flex: 8,
  },
  lineContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 4,
    width: '80%',
    flexDirection: 'row',
    position: 'absolute',
    left: '10%',
    top: '50%',
    marginTop: -3,
    borderRadius: 60,
    backgroundColor: '#f1f1f1',
  },
  line: {
    height: '100%',
    width: '100%',
    backgroundColor: '#008ee6',
  },
  draggable: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    aspectRatio: 1,
    position: 'absolute',
    top: -5,
    borderRadius: 100,
    overflow: 'visible',
  },
  circle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.24,
    shadowRadius: 2.8,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    aspectRatio: 1,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 1, 
    borderColor: '#f1f1f1',
    overflow: 'visible',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: '100%',
    width: '80%',
    paddingBottom: 10,
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 3,
    position: 'absolute',
    bottom: 0,
  },
  label: {
    fontSize: 9,
  },
});
export {styles};
