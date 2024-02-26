import {Platform, StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';

const forBoth = (anStyles, ioStyles) => {
  return Platform.OS === 'android' ? anStyles : ioStyles;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  circleGradient: {
    margin: 1,
    // width: '30%',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00000044',
    borderRadius: 15,
  },
  filterHeading: {
    flexDirection: forBoth('row', 'column'),
    justifyContent: 'space-between',
    width: widthToDp(90),
  },
  shareABillTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: '#00FC92',
    fontSize: 22,
    paddingHorizontal: 5,
  },
  saveButton: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,
  },
  restaurantFilterBg: {
    height: '100%',
    width: widthToDp(100),
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  restaurantFilterContainer: {
    borderRadius: 25,
    marginTop: 20,
    minHeight: 500,
    paddingHorizontal: 10,
    bottom: 0,
    zIndex: 20,
  },
  filterHeadingText: {
    color: '#fff',
    fontSize: 16,
  },
  cuisineTypeBtns: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  cuisineTypeBtnsContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterSection: {
    marginBottom: 10,
  },
  priceRange: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  priceRangeLabelBottom: {
    marginBottom: 20
  }
});
export {styles};
