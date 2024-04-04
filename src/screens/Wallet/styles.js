import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/FontFamily';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
  },

  cardBox: {
    width: widthToDp(80),
  },
  cardGradient: {
    padding: 10,

    borderRadius: 22,
  },
  btnText: {
    color: Colors.BLACK,
    fontFamily: fonts.URBANIST_REGULAR,
    fontSize: 14,
    marginTop: 10,
  },
  balance: {
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 35,
  },
  heading: {
    color: Colors.WHITE,
    fontFamily: fonts.URBANIST_BOLD,
    fontSize: 18,
    marginVertical: 10,
  },
  activityBox: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    fontSize: 16,
  },
  img: {
    width: widthToDp(18),
    height: widthToDp(18),
    borderRadius: widthToDp(20),
    resizeMode: 'contain',
  },
  restaurantBox: {
    justifyContent: 'center',
    marginLeft: 10,
    width: widthToDp(55),
  },
  amount: {
    color: Colors.GREEN,
    fontSize: 16,
    fontWeight: fonts.URBANIST_BOLD,
  },
  name: {
    color: Colors.WHITE,
    fontSize: 16,
  },

  mainCardView: {
    marginHorizontal: 15,
    marginBottom: heightToDp(23),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linearCard: {
    borderRadius: 12,
    width: widthToDp(75),
    height: heightToDp(35),
  },
  dashedBtn: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    width: widthToDp(15),
    height: heightToDp(35),
    borderColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  balanceView: {
    marginTop: widthToDp(7),
    alignItems: 'center',
  },
  balanceText: {
    fontFamily: fonts.URBANIST_REGULAR,
    color: Colors.WHITE,
  },
  activityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityDate: {
    fontFamily: fonts.URBANIST_THIN,
    fontSize: 12,
    color: Colors.WHITE,
  },
});
export {styles};
