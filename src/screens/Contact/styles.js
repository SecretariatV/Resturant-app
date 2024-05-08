import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  menuItemSmallbox: {
    marginHorizontal: 5,
    marginTop: 15,
    width: widthToDp(90),
    // width: screenToTextSize(40),
    // height: screenToTextSize(55),
    alignSelf: 'center',
    backgroundColor: '#7074C422',
    borderColor: '#fff4',
    borderWidth: 1,
    borderRadius: 20,
    // alignItems: 'center',
    // gap: 4,
    justifyContent: 'space-between',
    overflow: 'hidden',
    imgCont: {
      // backgroundColor: '#ff0',
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'cover',
      paddingHorizontaal: screenToTextSize(10),
    },
    image: {
      width: screenToTextSize(35),
      height: screenToTextSize(35),
      objectFit: 'contain',
      backgroundColor: '#88888855',
      borderRadius: 15,
    },
    nameCont: {
      // flex: 1,
      justifyContent: 'space-between',
      width: '100%',
      height: screenToTextSize(12),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: screenToTextSize(2),
      // backgroundColor: 'red',
    },
    itemName: {
      color: '#fff',
      fontSize: screenToTextSize(4),
      fontFamily: fonts.URBANIST_BOLD,
    },
  },
});
export {styles};