//packages

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
// import {BottomSheet} from '@rneui/themed';

// styles
import {tabNavStyles} from './tabNavigatorStyles';
// authstack screens
import Splash from '../screens/Splash';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Privacy from '../screens/auth/Privacy';
import Settinglist from '../screens/Setting';
import Preferences from '../screens/Preferences';
import EditPreferences from '../screens/EditPreferences';
import PreferencesSuccess from '../screens/PreferencesSuccess';
import ForgotPassword from '../screens/auth/ForgotPassword';
import CreatePassword from '../screens/auth/CreatePassword';
import LoginTwo from '../screens/auth/LoginTwo';
import Verification from '../screens/auth/Verification';

// homestack screens
import RestaurantMain from '../screens/RestaurantMain';
import QrCode from '../screens/QrCode';
import Pay from '../screens/Pay';
import Requests from '../screens/Requests';
import RestaurantMenu from '../screens/RestaurantMenu';
import Cart from '../screens/Cart';
import Restaurant from '../screens/Restaurant';
import Thankyou from '../screens/Thankyou';
import MenuDetail from '../screens/MenuDetail';
import IngredientCustomization from '../screens/IngredientCustomization';
// import ResturantMenu from '../screens/ResturantMenu';
import PaymentOption from '../screens/PaymentOption';
import AddCard from '../screens/AddCard';
import AmountPaid from '../screens/AmountPaid';
import GeneratedQrCode from '../screens/GeneratedQrCode';
import ProductReview from '../screens/ProductReview';
import HomeScreens from '../screens/HomeScreens';
import FeedbackSuccess from '../screens/FeedbackSuccess';
import CustomDrawer1 from '../screens/drawer/CustomDrawer';
import {colors} from '../screens/drawer/constant';
import AccountDetail from '../screens/AccountDetail';
import Setting from '../screens/Setting';
import Reward from '../screens/Reward';
import OrderHistory from '../screens/OrderHistory';
import OrderHistoryDetail from '../screens/OrderHistoryDetail';
import TrackOrder from '../screens/TrackOrder';
import ConfirmPayment from '../screens/ConfirmPayment/index.js';

// utils
import {widthToDp} from '../utils/Dimensions';
import {screenToTextSize} from '../utils/helper';
// icons
// import MenuIcon from '../assets/images/tabbar-menu.svg';
import QrIcon from '../assets/images/tabbar-qr.svg';
import {useDispatch, useSelector} from 'react-redux';
import HomeIcon from '../assets/images/home.svg';
import ButtonsCommon from '../components/Buttons/ButtonCommon.js';
import CloseFilterBtn from '../assets/images/closeBtnFilter.svg';
import RestaurantReview from '../screens/RestaurantReview/index.js';
import Wallet from '../screens/Wallet/index.js';
import Profile from '../screens/Profile/index.js';
import {Ionicons} from 'react-native-vector-icons';
import MenuBg from '../assets/images/footer.svg';
import Svg, {Path} from 'react-native-svg';
import Footer from '../components/Footer/index.js';
import {setRequestBtn} from '../redux/actions/auth.js';
import AR from '../screens/AR/index.js';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {fonts} from '../theme/FontFamily.js';
import CartSection from '../components/CartSection/index.js';
import {setCartBtn} from '../redux/actions/cart.js';
import EditProfile from '../screens/EditProfile/index.js';
import {BlurView} from '@react-native-community/blur';
import Notification from '../screens/Notification/index.js';
import Terms from '../screens/Terms/index.js';
import FAQ from '../screens/FAQ/index.js';
import Contact from '../screens/Contact/index.js';
import Favorites from '../screens/Favorites/index.js';
import Colors from '../theme/Colors.js';
import DemoScreen from '../screens/DemoScreen/index.js';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();
const SettingStacked = createStackNavigator();
const Drawer = createDrawerNavigator(); // Create a Drawer navigator

const DrawerScreens = () => {
  //  console.log('srm2', setRequestModal);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        swipeEdgeWidth: Platform.OS === 'android' && 50,
        // sceneContainerStyle: styles.sceneStyles,

        drawerStyle: {
          backgroundColor: '#005E44',
          width: widthToDp(85),
        },
      }}
      drawerContent={props => <CustomDrawer1 {...props} />}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Drawer.Screen name="Setting" component={Setting} /> */}

      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};
const AuthStack = ({toggleLogin}) => {
  return (
    <Stack.Navigator
      animationEnabled
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="SettingList" component={Settinglist} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="EditPreferences" component={EditPreferences} />
      <Stack.Screen name="PreferencesSuccess" component={PreferencesSuccess} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="LoginTwo" component={LoginTwo} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
};
const SettingStack = () => {
  return (
    <SettingStacked.Navigator
      initialRouteName="Setting"
      screenOptions={{
        headerShown: false,
      }}>
      <SettingStacked.Screen name="Setting" component={Setting} />

      <SettingStacked.Screen name="Profile" component={Profile} />
    </SettingStacked.Navigator>
  );
};
const HomeStack = ({activeRestaurant}) => {
  // console.log('activeRestaurant', activeRestaurant, typeof activeRestaurant);

  return (
    <Stack.Navigator
      // initialRouteName="TabNavigator"
      // initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RestaurantMain" component={RestaurantMain} />

      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          // Enable vertical swipe down
        }}>
        <Stack.Screen name="MenuDetail" component={MenuDetail} />

        <Stack.Screen
          name="IngredientCustomization"
          component={IngredientCustomization}
        />
      </Stack.Group>
      <Stack.Group>
        {/* <Stack.Screen name="MenuDetail" component={MenuDetail} /> */}

        <Stack.Screen name="AR" component={AR} />
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Requests" component={Requests} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="PaymentOption" component={PaymentOption} />
        <Stack.Screen name="AmountPaid" component={AmountPaid} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="GeneratedQrCode" component={GeneratedQrCode} />
        <Stack.Screen name="ProductReview" component={ProductReview} />
        <Stack.Screen name="FeedbackSuccess" component={FeedbackSuccess} />
        <Stack.Screen name="AccountDetail" component={AccountDetail} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Reward" component={Reward} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Wallet" component={Wallet} />
        {/* <Stack.Screen name="Wallet" component={Wallet} /> */}
        <Stack.Screen name="RestaurantReview" component={RestaurantReview} />
        <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />

        {/* <Stack.Screen name="SettingStack" component={SettingStack} /> */}
        <Stack.Screen
          name="OrderHistoryDetail"
          component={OrderHistoryDetail}
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="DemoScreen" component={DemoScreen} />
        {/* <Stack.Screen name="Setting" component={Setting} /> */}
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="EditPreferences" component={EditPreferences} />

        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => (
  <View style={tabNavStyles.tabContainer}>
    <Footer />
    <View
      style={{
        width: widthToDp(100),
        flexDirection: 'row',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        // const isFocused = state.routes[state.index].key === route.key;

        console.log(isFocused, 'isFocused');
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[tabNavStyles.tabItem]}>
            {label === 'HomeStack' && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  left: -10,
                  bottom: 5,
                }}>
                <Image
                  style={{width: 30, height: 30, opacity: 0.6}}
                  source={require('../assets/images/home.png')}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: screenToTextSize(3.2),
                    fontFamily: fonts.URBANIST_MEDIUM,
                  }}>
                  Home
                </Text>
              </View>
            )}
            {label === 'Requests' && (
              <View style={tabNavStyles.tabNavRequestBtn}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/images/tabbar-request.png')}
                />
                <Text style={tabNavStyles.tabNavRequestBtnText}>Requests</Text>
              </View>
            )}
            {label === 'RestaurantMenu' && (
              <View style={tabNavStyles.tabNavMenuBtn}>
                <Image source={require('../assets/images/menu-tab-back.png')} />

                <Image
                  style={{width: 30, height: 30, position: 'absolute'}}
                  source={require('../assets/images/menu.png')}
                />
              </View>
            )}

            {label === 'QrCode' && (
              <View style={tabNavStyles.tabNavQrCodeScannerBtn}>
                {/* <> */}
                <Image source={require('../assets/images/menu-tab-back.png')} />
                <QrIcon
                  width={screenToTextSize(8)}
                  style={{width: 24, height: 24, position: 'absolute'}}
                />
                {/* </> */}
              </View>
            )}

            {label === 'Order' && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  right: -10,
                  bottom: 5,
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../assets/images/cart.png')}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: screenToTextSize(3.2),
                    fontFamily: fonts.URBANIST_MEDIUM,
                  }}>
                  Order
                </Text>
              </View>
            )}

            {label === 'PaymentOption' && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  // right: -,
                  bottom: 5,
                }}>
                <Image
                  style={{resizeMode: 'contain', width: 30, height: 30}}
                  source={require('../assets/images/tabbar-pay.png')}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontSize: screenToTextSize(3.2),
                    fontFamily: fonts.URBANIST_MEDIUM,
                  }}>
                  Pay
                </Text>
              </View>
            )}

            {isFocused && <View style={tabNavStyles.tabIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

const TabNavigator = () => {
  const dispatch = useDispatch();
  const qr = useSelector(state => state.auth.qr);
  const req = useSelector(state => state.auth.request);

  useEffect(() => {
    console.log(req, 'my request');
    if (qr) {
    }
  }, [qr]);
  console.log(qr, 'qr userrrrr');
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      // initialRouteName={qr ? 'RestaurantMain' : 'QrCode'}
      backBehavior="history"
      screenListeners={({navigation, route}) => ({
        tabPress: e => {},
      })}
      screenOptions={({route}) => ({
        // headerTitleAlign: "center",
        tabBarVisible: route.params && route.params.tabBarVisible !== false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          console.log(route.name, 'route.name');

          return (
            <Image
              style={{width: 24, height: 24, opacity: 0.6}}
              source={require('../assets/images/home.png')}
            />
          );
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
      })}
      gestureEnabled={true}
      swipeEnabled={true}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          headerShown: false,
          tabBarVisible: route.params && route.params.tabBarVisible == false,
        })}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          headerShown: false,
        }}
        listeners={() => ({
          tabPress: e => {
            console.log('listern is working');

            e.preventDefault();
            dispatch(setRequestBtn(true));
          },
        })}
      />

      {qr ? (
        <Tab.Screen
          name={'RestaurantMenu'}
          component={RestaurantMenu}
          options={{
            headerShown: false,

            tabBarLabel: 'RestaurantMenu',
          }}
        />
      ) : (
        <Tab.Screen
          name={'QrCode'}
          component={QrCode}
          options={({route}) => ({
            headerShown: false,

            tabBarLabel: 'QrCode',
            tabBarIcon: () => {
              return <View></View>;
            },
          })}
        />
      )}

      <Tab.Screen
        name="Cart"
        component={Cart}
        // listeners={() => ({
        //   tabPress: e => {
        //     console.log('cart listern is working');

        //     e.preventDefault();
        //     dispatch(setCartBtn(true));
        //   },
        // })}
        options={{
          tabBarLabel: 'Order',
          headerShown: false,

          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  right: -20,
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/cart.png')}
                />
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Order
                </Text>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="PaymentOption"
        component={PaymentOption}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  right: -10,
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/pay.png')}
                />
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Pay
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  const bottomSheetRef = useRef(null);
  const cartbottomSheetRef = useRef(null);

  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const req = useSelector(state => state.auth.request);
  const cartBtn = useSelector(state => state.cart.cartBtnStatus);

  useEffect(() => {
    if (user) {
    }
  }, [user]);
  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges>>>>>>>>', index);
    if (index == -1) {
      dispatch(setRequestBtn(false));
    }
  }, []);
  const handleCartSheetChanges = useCallback(index => {
    console.log('handleSheetChanges>>>>>>>>', index);
    if (index == -1) {
      dispatch(setCartBtn(false));
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {user ? <DrawerScreens /> : <AuthStack />}
        {req ? (
          <BottomSheet
            handleComponent={null}
            enablePanDownToClose={true}
            backdropComponent={({style, backgroundStyle}) => (
              <BlurView
                style={[style, {overflow: 'hidden'}]}
                blurType="dark"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
                backgroundStyle={[
                  backgroundStyle,
                  {flex: 1, overflow: 'hidden'},
                ]}
              />
            )}
            // backgroundComponent={({style, backgroundStyle}) => (
            //   <BlurView
            //     style={[style, {flex: 1, overflow: 'hidden', height: 500}]}
            //     blurType="light"
            //     blurAmount={10}
            //     reducedTransparencyFallbackColor="white"
            //     backgroundStyle={[
            //       backgroundStyle,
            //       {flex: 1, overflow: 'hidden'},
            //     ]}
            //   />
            // )}
            enableDynamicSizing={false}
            snapPoints={[350, '40%']}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}>
            <BottomSheetView style={tabNavStyles.contentContainer}>
              <View style={tabNavStyles.bottomSheetContainer}>
                <Image
                  style={tabNavStyles.bottomImg}
                  source={require('../assets/images/bottom_bg.png')}
                />
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: Colors.GREEN,
                    borderRadius: 15,
                  }}>
                  <View style={tabNavStyles.bottomView}>
                    <View style={tabNavStyles.bottomSubView}>
                      <Text style={tabNavStyles.requestText}>Request</Text>
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(setRequestBtn(false));
                          // navigation.goBack();
                        }}
                        style={{padding: 10}}>
                        <CloseFilterBtn width={20} height={20} />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <ButtonsCommon
                        btnText={'Call waiter'}
                        containerStyle={{marginTop: 10}}
                        btnTextStyle={{marginLeft: 10}}
                        img
                        imageSource={require('../assets/images/waiter.png')}
                        btnStyle={tabNavStyles.btnStyle}
                        imgStyle={{width: 30, height: 30}}
                      />
                      <ButtonsCommon
                        btnText={'Coal change'}
                        containerStyle={{marginTop: 10}}
                        btnTextStyle={{marginLeft: 10}}
                        img
                        imageSource={require('../assets/images/coal.png')}
                        btnStyle={tabNavStyles.btnStyle}
                        imgStyle={{width: 30, height: 30}}
                      />

                      <ButtonsCommon
                        btnText={'Ashtray'}
                        containerStyle={{marginTop: 10}}
                        btnTextStyle={{marginLeft: 20}}
                        img
                        imageSource={require('../assets/images/ashtray.png')}
                        btnStyle={tabNavStyles.btnStyle}
                        imgStyle={{width: 30, height: 30}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </BottomSheetView>
          </BottomSheet>
        ) : (
          <></>
        )}

        {/* {cartBtn ? (
          <BottomSheet
            handleComponent={null}
            onChange={handleCartSheetChanges}
            enablePanDownToClose={true}
            enableDynamicSizing={false}
            backgroundStyle={{
              backgroundColor: 'transparent',
            }}
            ref={cartbottomSheetRef}
            snapPoints={['90%', '90%']}>
            <Cart />
          </BottomSheet>
        ) : (
          <></>
        )} */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default RootNavigator;
