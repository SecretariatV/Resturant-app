import {StyleSheet} from 'react-native';
import {widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../../theme';
import {fonts} from '../../theme/FontFamily';

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 5,
    marginVertical: 15,
    width: '100%',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  fancyGrad: {
    width: '33%',
  },
  fancyGradBorder: {
    borderBottomColor: 'transparent',
    // borderBottomWidth: 1,
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  fancyGradBorderChild: {
    flex: 1,
    height: 1,
  },
  textWrapper: {
    margin: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.33)',
    borderRadius: 15,
  },
  textContent: {
    fontWeight: '700',
  },
  separatorText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.URBANIST_MEDIUM,
  },
});

export {styles};
