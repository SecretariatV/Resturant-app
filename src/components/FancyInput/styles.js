import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginBottom: 20,
  },
  wrapper: {},
  fieldLabel: {
    fontSize: 20,
    color: '#fff',
    fontFamily: fonts.URBANIST_SEMIBOLD,
  },
  inputWrapper: {
    flexDirection: 'row',
    paddingStart: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fieldImage: {
    width: 25,
    height: 25,
  },
  fieldInput: {
    color: '#fff',
    // paddingLeft: 15,
    // textAlign:'center',
    padding: widthToDp(5),
  },

  fancyGrad: {
    width: '100%',
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
  showPassIcon: {
    width: 20,
    height: 20,
  },
  showPassIconBtn: {
    position: 'absolute',
    right: 15,
  },
});

export {styles};
