import {Platform, StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const forBoth = (anStyles, ioStyles) => {
  return Platform.OS === 'android' ? anStyles : ioStyles;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:15
  },
  introHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    // fontSize: 22,
    wrapper: {
      width: widthToDp(90),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'start',
    },
    userNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    userName: {
      fontSize: screenToTextSize(5),
      color: '#fff',
    },
  },
  gradientBoxContainer: {
    margin: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignSelf: 'start',
    alignItems: 'start',
    backgroundColor: '#00000044',
    borderRadius: 10,
  },
  gradientBoxText: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    color: '#00FC92',
    fontSize: screenToTextSize(5),
    paddingHorizontal: 5,
    marginBottom: 4,
  },
  activeOrderBarContainer: {
    alignItems: 'start',
  },
  activeOrderText: {
    fontSize: 12,
    fontFamily: fonts.URBANIST_MEDIUM,
    // fontSize
    color: Colors.GREEN,
    marginBottom: 5,
    height: 15,
  },
  activeOrderBar: {
    marginLeft: 5,
  },
  activeOrderBarbg: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: '100%',
    position: 'relative',
    height: 2,
    marginTop: 5,
  },
  filterHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthToDp(90),
  },
  saveButton: {
    position: 'absolute',

    bottom: 30,
    left: 20,
    right: 20,
  },
  customizeTxt: {
    fontFamily: fonts.URBANIST_EXTRABOLD,
    fontSize: 28,
    textAlign: 'center',
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
    marginBottom: 20,
  },
  listStyle: {
    marginVertical: 12,
    marginHorizontal: 15,
  },
});
export {styles};
