import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  subContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: heightToDp(45),
  },
  rewardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    // margin: 10,
    padding: 10,
  },
  rewardText: {
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 16,
    color: Colors.WHITE,
  },

  menuItemSmallbox: {
    marginHorizontal: 5,
    marginVertical: 5,
    width: widthToDp(90),
    // width: screenToTextSize(40),
    // height: screenToTextSize(55),
    alignSelf: 'center',
    backgroundColor: '#7074C422',
    borderColor: '#fff4',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
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
    },
    itemName: {
      color: '#fff',
      fontSize: screenToTextSize(4),
      fontFamily: fonts.URBANIST_BOLD,
    },
    ratingCont: {
      // flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
      // height: screenToTextSize(12),
      // paddingHorizontal: screenToTextSize(2),
    },
    rating: {
      color: '#fff',
      fontSize: screenToTextSize(4),
      fontFamily: fonts.URBANIST_BOLD,
    },
  },

  historyDetail: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
  },
  restDetail: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  amount: {
    color: Colors.GREEN,
    fontSize: 22,
    fontFamily: fonts.URBANIST_BOLD,
  },
  reviewBtn: {
    width: '95%',
    marginBottom: 10,
  },
});
export {styles};
