import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {colors, constant} from './constant';
import LinearGradient from 'react-native-linear-gradient';
// import {View} from '@candlefinance/blur-view';
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
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/actions/auth';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CustomDrawer1 = props => {
  const [points, setPoints] = useState(100);
  const circularProgressRef = useRef(null);
  const dispatch = useDispatch();

  const navigation = useNavigation();

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
          {/* <View
            blurTintColor="#0E0E15" // has to be hex with opacity
            colorTintOpacity={0.1}
            blurRadius={10}
            style={styles.absolute}
          /> */}

          {/* header */}
          <Animated.View
            style={[
              styles.row,
              styles.view,
              styles.marginTop,
              viewStyles2('top'),
            ]}>
            <View style={styles.iconContainer}>
              <AnimatedCircularProgress
                ref={circularProgressRef}
                size={64}
                width={3}
                fill={50}
                rotation={10}
                // style={{backgroundColor: '#fff'}}
                childrenContainerStyle={{backgroundColor: '#fff'}}
                // rotation={20}
                // arcSweepAngle={280}
                tintColor="#03E7AB"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875">
                {points => (
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      source={require('../../assets/images/profileImg.png')}
                      style={styles.menuProfile}
                    />
                  </View>
                )}
              </AnimatedCircularProgress>
            </View>

            <View style={{}}>
              <Text style={styles.headerTitle}>Mark Anderson</Text>
              <View style={styles.userMenu}>
                {/* <View class="level-bar-color-bg" style={styles.levelBarColorBg}>
                  <View class="level-bar-bg-dark" style={styles.levelBarBgDark}>
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
                        style={[styles.levelGradient, {width: '50%'}]}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}></LinearGradient>
                    </View>
                  </View>
                </View> */}
                <GradientText>Level</GradientText>
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
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('OrderHistory')}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <History width={28} height={28} />
                  <Text style={[styles.label]}>Order History</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Reward')}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Reward width={28} height={28} />
                  <Text style={[styles.label]}>Rewards</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              onPress={() => navigation.navigate('Wallet')}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Wallet width={28} height={28} />
                  <Text style={[styles.label]}>Wallet</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Setting')}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Setting width={28} height={28} />
                  <Text style={[styles.label]}>Settings</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Notification width={28} height={28} />
                  <Text style={[styles.label]}>Notification</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Language width={28} height={28} />
                  <Text style={[styles.label]}>Language Selection</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>
          </Animated.ScrollView>
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
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={onPress}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}
              onPress={() => navigation.navigate('Terms')}>
              <View>
                <View style={styles.buttonView}>
                  <Term width={28} height={28} />
                  <Text style={[styles.label]}>Terms & Conditions</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(setUser(false));
              }}
              accessibilityRole="button"
              style={[styles.drawerItem, styles.buttons]}>
              <View>
                <View style={styles.buttonView}>
                  <Logout width={28} height={28} />
                  <Text style={[styles.label]}>Logout</Text>
                </View>
                <FadedSeparator
                  fancyGradBorderStyle={styles.fancyLine}
                  containerStyle={{marginVertical: 15}}
                  active
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
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
    // marginRight: 2,
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
  levelBarColorBg: {
    backgroundColor: '#00ffa8',
    width: screenToTextSize(21),
    position: 'relative',
    borderRadius: 50,
    height: screenToTextSize(3),
    padding: 2,
  },
  levelBarBgDark: {
    backgroundColor: '#012a25',
    width: screenToTextSize(20),
    position: 'relative',
    borderRadius: 50,
    height: screenToTextSize(2),
  },
  levelGradient: {
    borderRadius: 10,
    flexWrap: 'nowrap',
    height: 3,
    // width: '50%',
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
    backgroundColor: '#012a25',
    borderRadius: 15,
    width: '100%',
    position: 'absolute',
    height: 3,
    marginTop: 2,
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
    // borderTopEndRadius: 15,
    // borderBottomStartRadius: 15,

    // marginRight: 2,

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
  // separator: {
  //   width: '100%',
  //   height: 1,
  //   backgroundColor: colors.darkGray,
  //   marginVertical: constant.SPACING / 2,
  // },
  headerTitle: {
    fontSize: 22,
    color: Colors.GREEN,
    fontFamily: fonts.URBANIST_BOLD,
  },
  // profile: {
  //   marginVertical: constant.SPACING / 2,
  //   marginRight: constant.SPACING,
  //   marginLeft: constant.SPACING / 2,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  //   backgroundColor: colors.light,
  // },
  // text: {
  //   color: colors.white,
  // },
});
