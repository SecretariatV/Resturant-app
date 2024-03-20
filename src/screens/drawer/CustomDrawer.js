import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {colors, constant} from './constant';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@candlefinance/blur-view';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import {screenToTextSize} from '../../utils/helper';
import GradientText from '../../components/GradientText';
import {widthToDp} from '../../utils/Dimensions';
import FadedSeparator from '../../components/FadedSeparator';
import Fav from '../../assets/images/menu-fav.svg';
import History from '../../assets/images/history.svg';
import Reward from '../../assets/images/reward.svg';
import Wallet from '../../assets/images/wallet.svg';
import Setting from '../../assets/images/setting.svg';
import Notification from '../../assets/images/notification.svg';
import Language from '../../assets/images/globe.svg';
import Help from '../../assets/images/help.svg';
import Term from '../../assets/images/terms.svg';
import Logout from '../../assets/images/logout.svg';

const CustomDrawer1 = props => {
  const scrollRef = useRef(null);

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-200, 0]);
    return {
      transform: [{translateX}],
    };
  });

  const viewStyles2 = type =>
    useAnimatedStyle(() => {
      const val = type === 'top' ? -100 : 100;
      const translateY = interpolate(drawerProgress.value, [0, 1], [val, 0]);
      const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
      return {
        transform: [{translateY}],
        opacity,
      };
    });

  return (
    <LinearGradient
      colors={['#0E0E15', '#0E0E15', '#0E0E15', '#00F59411']}
      style={styles.drawerGradient}
      useAngle={true}
      angle={300}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <View style={styles.circleGradient}>
        <View style={[styles.view, styles.borderStyle]}>
          <BlurView
            blurTintColor="#0E0E15" // has to be hex with opacity
            colorTintOpacity={0.1}
            blurRadius={10}
            style={styles.absolute}
          />

          {/* header */}
          <Animated.View
            style={[
              styles.row,
              styles.view,
              styles.marginTop,
              viewStyles2('top'),
            ]}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/images/profileImg.png')}
                style={styles.menuProfile}
              />
            </View>
            <View style={{}}>
              <Text style={styles.headerTitle}>Mark Anderson</Text>
              <View style={styles.userMenu}>
                <View
                  class="active-order-bar-bg"
                  style={styles.activeOrderBarbg}>
                  <LinearGradient
                    class="intro-active-orders"
                    colors={[
                      '#01322Bff',
                      '#00F594ff',
                      '#00F594ff',
                      '#02ABEEff',
                    ]}
                    useAngle={true}
                    angle={45}
                    style={styles.levelGradient}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}></LinearGradient>
                </View>
                <GradientText style={{marginLeft: 10}}>Level</GradientText>
                <LinearGradient
                  colors={['#00F69299', '#00A7F7FF']}
                  useAngle={true}
                  angle={820}
                  style={{borderRadius: 22, flexWrap: 'nowrap', marginLeft: 10}}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}>
                  <View style={styles.circleGradientTwo}>
                    <Text style={[styles.btnText]}>02</Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </Animated.View>
          {/* Drawer List Item */}
          <Animated.ScrollView
            ref={scrollRef}
            {...props}
            showsVerticalScrollIndicator={false}
            style={[viewStyles]}>
            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Fav width={28} height={28} />
                  <Text style={[styles.label]}>Favorites</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <History width={28} height={28} />
                  <Text style={[styles.label]}>Order History</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Reward width={28} height={28} />
                  <Text style={[styles.label]}>Rewards</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Wallet width={28} height={28} />
                  <Text style={[styles.label]}>Wallet</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Setting width={28} height={28} />
                  <Text style={[styles.label]}>Settings</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Notification width={28} height={28} />
                  <Text style={[styles.label]}>Notification</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Language width={28} height={28} />
                  <Text style={[styles.label]}>Language Selection</Text>
                </View>
                <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
              </View>
            </TouchableOpacity>
          </Animated.ScrollView>
          {/* footer */}
          <TouchableOpacity>
            <Animated.View
              style={[styles.view, styles.marginBottom, viewStyles2('bottom')]}>
              <TouchableOpacity
                // onPress={onPress}
                accessibilityRole="button"
                style={[styles.drawerItem, styles.buttons]}>
                <View>
                  <View style={styles.buttonView}>
                    <Help width={28} height={28} />
                    <Text style={[styles.label]}>Help Center</Text>
                  </View>
                  <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={onPress}
                accessibilityRole="button"
                style={[styles.drawerItem, styles.buttons]}>
                <View>
                  <View style={styles.buttonView}>
                    <Term width={28} height={28} />
                    <Text style={[styles.label]}>Terms & Conditions</Text>
                  </View>
                  <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={onPress}
                accessibilityRole="button"
                style={[styles.drawerItem, styles.buttons]}>
                <View>
                  <View style={styles.buttonView}>
                    <Logout width={28} height={28} />
                    <Text style={[styles.label]}>Logout</Text>
                  </View>
                  <FadedSeparator fancyGradBorderStyle={styles.fancyLine} />
                </View>
              </TouchableOpacity>
            </Animated.View>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default CustomDrawer1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerGradient: {
    borderRightRadius: 15,
    marginRight: 2,
    backgroundColor: 'transparent',
    flex: 1,
  },
  menuProfile: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  fancyLine: {
    width: widthToDp(60),
  },
  userMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: widthToDp(0.8),
  },
  levelGradient: {
    borderRadius: 10,
    flexWrap: 'nowrap',
    height: 2,
    width: '65%',
  },
  activeOrderBarContainer: {
    alignItems: 'start',
  },
  activeOrderText: {
    fontSize: screenToTextSize(3),
    color: Colors.GREEN,
    height: 15,
  },
  activeOrderBar: {
    marginLeft: 5,
  },
  activeOrderBarbg: {
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: '30%',
    // position: 'relative',
    height: 2,
    marginTop: 5,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#CCCCCC33',
    // backgroundColor: '#000',
  },

  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  background_image: {
    height: '100%',
    // width: 300,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
  circleGradient: {
    borderTopEndRadius: 15,
    borderBottomStartRadius: 15,

    marginRight: 2,

    flex: 1,

    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  circleGradientTwo: {
    margin: 5,

    alignItems: 'center',

    borderRadius: 22,
  },
  view: {
    borderRadius: constant.borderRadius,
    padding: constant.SPACING / 1.5,

    marginTop: 60,
  },
  borderStyle: {
    borderRightWidth: 1,
    borderColor: '#CCC',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    width: '90%',
    alignSelf: 'flex-start',
    flex: 1,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
  },
  marginVertical: {
    marginVertical: constant.SPACING / 2,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: '#F7F7F8',
    fontFamily: fonts.URBANIST_MEDIUM,
    marginLeft: 10,
  },
  notificationBadge: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
  iconContainer: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 2,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray,
    marginVertical: constant.SPACING / 2,
  },
  headerTitle: {
    fontSize: 22,
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_BOLD,
  },
  profile: {
    marginVertical: constant.SPACING / 2,
    marginRight: constant.SPACING,
    marginLeft: constant.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.light,
  },
  text: {
    color: colors.white,
  },
});
