//packages

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {BottomSheet} from '@rneui/themed';

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

// utils
import {widthToDp} from '../utils/Dimensions';
import {screenToTextSize} from '../utils/helper';
// icons
import MenuIcon from '../assets/images/tabbar-menu.svg';
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
const SettingStacked = createNativeStackNavigator();
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
      // initialRouteName="RestaurantMain"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RestaurantMain" component={RestaurantMain} />

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="MenuDetail" component={MenuDetail} />
        <Stack.Screen
          name="IngredientCustomization"
          component={IngredientCustomization}
        />
      </Stack.Group>
      <Stack.Group>
        {/* <Stack.Screen name="MenuDetail" component={MenuDetail} /> */}

        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Requests" component={Requests} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
        <Stack.Screen
          name="QrCode"
          component={QrCode}
          // options={() => ({
          //   tabBarStyle: {
          //     display: 'none',
          //   },
          //   tabBarButton: () => null,
          // })}
        />
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

        <Stack.Screen name="SettingStack" component={SettingStack} />
        <Stack.Screen
          name="OrderHistoryDetail"
          component={OrderHistoryDetail}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => (
  <View style={tabNavStyles.tabContainer}>
    <Footer />
    <View
      style={{
        // backgroundColor: 'red',
        width: widthToDp(100),
        flexDirection: 'row',

        // flex: 1,
        // position: 'absolute',
        // bottom: 20,
      }}>
      {state.routes.map((route, index) => {
        console.log(route, 'routerouteroute');
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

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
            style={[
              tabNavStyles.tabItem,
              // {borderBottomColor: isFocused ? '#007bff' : 'transparent'},
            ]}>
            {label === 'HomeStack' && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  left: -10,
                }}>
                <Image
                  style={{width: 24, height: 24, opacity: 0.6}}
                  source={require('../assets/images/home.png')}
                />
                {/* <HomeIcon width={25} height={25} style={{ opacity: 0.5, marginBottom: -5}}/> */}
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Home
                </Text>
              </View>
            )}
            {label === 'Requests' && (
              <View style={tabNavStyles.tabNavRequestBtn}>
                <Image
                  style={{width: 24, height: 24}}
                  source={require('../assets/images/tabbar-request.png')}
                />
                <Text style={tabNavStyles.tabNavRequestBtnText}>Requests</Text>
              </View>
            )}
            {label === 'RestaurantMenu' && (
              <View style={tabNavStyles.tabNavMenuBtn}>
                <MenuIcon
                  width={screenToTextSize(8)}
                  style={{width: 12, height: 12}}
                />
              </View>
            )}

            {label === 'QrCode' && (
              <View style={tabNavStyles.tabNavQrCodeScannerBtn}>
                <QrIcon
                  width={screenToTextSize(8)}
                  style={{width: 24, height: 24}}
                />
              </View>
            )}

            {label === 'Cart' && (
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
                  source={require('../assets/images/cart.png')}
                />
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Cart
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
            )}

            {/* {label === 'HomeStack' && <HomeIconTwo />}

          {label === 'HomeStack' && <HomeIconTwo />}

          {label === 'Profile' && <ProfileIcon />} */}
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

const TabNavigator = ({activeRestaurant}) => {
  // console.log(user, 'login twoser Data======');
  const dispatch = useDispatch();
  const qr = useSelector(state => state.auth.qr);
  const req = useSelector(state => state.auth.request);

  useEffect(() => {
    console.log(req, 'my request');
    // console.log(qr, 'user');
    if (qr) {
    }
  }, [qr]);
  console.log(qr, 'qr userrrrr');
  return (
    <Tab.Navigator
      // tabBar={props => (
      //   <>
      //     <MenuBg />
      //     {/* <BottomTabBar {...props} /> */}
      //   </>
      // )}
      tabBar={props => <CustomTabBar {...props} />}
      // initialRouteName={qr ? 'RestaurantMain' : 'QrCode'}
      backBehavior="history"
      screenListeners={({navigation, route}) => ({
        tabPress: e => {},
      })}
      // screenOptions={({route}) => ({
      //   headerShown: false,
      //   // tabBarHideOnKeyboard: true,
      //   tabBarPosition: 'bottom',
      //   tabBarShowLabel: false,
      //   tabBarStyle: tabNavStyles.tabNavigatorBarStyle,
      // })}

      screenOptions={({route}) => ({
        // headerTitleAlign: "center",
        tabBarVisible: route.params && route.params.tabBarVisible !== false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          console.log(route.name, 'route.name');

          if (route.name === 'RestaurantMain') {
            iconName = focused ? 'home' : 'home-outline';
          }

          // else if (route.name === "Settings") {
          //   iconName = focused ? "settings" : "ios-settings-sharp";
          // } else if (route.name === "Notifications") {
          //   iconName = focused ? "ios-notifications" : "notifications-outline";
          // }
          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;

          return (
            <Image
              style={{width: 24, height: 24, opacity: 0.6}}
              source={require('../assets/images/home.png')}
            />
          );
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: 'gray',
      })}>
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

          // tabBarIcon: ({focused}) => {
          //   return (
          //     <View style={tabNavStyles.tabNavRequestBtn}>
          //       <Image
          //         style={{width: 24, height: 24}}
          //         source={require('../assets/images/tabbar-request.png')}
          //       />
          //       <Text style={tabNavStyles.tabNavRequestBtnText}>Requests</Text>
          //     </View>
          //   );
          // },
        }}
        listeners={() => ({
          tabPress: e => {
            console.log('listern is working');

            e.preventDefault();
            dispatch(setRequestBtn(true));
            // setShowFilter(true);
          },
        })}
      />

      {/* <Tab.Screen
        name={qr ? 'RestaurantMenu' : 'QrCode'}
        component={qr ? RestaurantMenu : QrCode}
        options={{
          tabBarLabel: qr ? 'RestaurantMenu' : 'QrCode',
          // tabBarStyle: {display: qr ? null : null},

          tabBarIcon: () => {
            return (
              <View style={tabNavStyles.tabNavMenuBtn}>
                {qr ? (
                  <MenuIcon
                    width={screenToTextSize(8)}
                    style={{width: 12, height: 12}}
                  />
                ) : (
                  <QrIcon
                    width={screenToTextSize(8)}
                    style={{width: 24, height: 24}}
                  />
                )}
              </View>
            );
          },
        }}
      /> */}

      {qr ? (
        <Tab.Screen
          name={'RestaurantMenu'}
          component={RestaurantMenu}
          options={{
            headerShown: false,

            tabBarLabel: 'RestaurantMenu',
            tabBarIcon: () => {
              return (
                <View style={tabNavStyles.tabNavMenuBtn}>
                  <MenuIcon
                    width={screenToTextSize(8)}
                    style={{width: 12, height: 12}}
                  />
                </View>
              );
            },
          }}
        />
      ) : (
        <Tab.Screen
          name={'QrCode'}
          component={QrCode}
          options={({route}) => ({
            headerShown: false,

            // tabBarVisible: getTabBarVisibility('QrCode'),
            // tabBarStyle: {display: 'none'},
            tabBarLabel: 'QrCode',
            tabBarIcon: () => {
              return (
                <View style={tabNavStyles.tabNavQrCodeScannerBtn}>
                  <QrIcon
                    width={screenToTextSize(8)}
                    style={{width: 24, height: 24}}
                  />
                </View>
              );
            },
          })}
        />
      )}

      <Tab.Screen
        name="Cart"
        component={Cart}
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
                  right: -20,
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/cart.png')}
                />
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Cart
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

      {/* <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
  

      <Tab.Screen
        name="Reward"
        component={Reward}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="OrderHistory"
        component={OrderHistory}
        options={{
          tabBarButton: () => null,
          tabBarVisible: true,
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="OrderHistoryDetail"
        component={OrderHistoryDetail}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

   

      <Tab.Screen
        name="Thankyou"
        component={Thankyou}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="TrackOrder"
        component={TrackOrder}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="HomeScreens"
        component={HomeScreens}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
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
                  Cart
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

      <Tab.Screen
        name="ProductReview"
        component={ProductReview}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="RestaurantReview"
        component={RestaurantReview}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      /> */}
    </Tab.Navigator>
  );
};

const RootNavigator = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);
  const req = useSelector(state => state.auth.request);

  // console.log(user, '========user Data======');
  const [saveUser, setSaveUser] = useState(false);
  const [activeRestaurant, setActiveRestaurant] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    console.log(req, 'ruse effeeq');
    if (user) {
    }
  }, [user]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {user ? <DrawerScreens /> : <AuthStack />}
        {req ? (
          <BottomSheet modalProps={{}} isVisible={req}>
            <View style={tabNavStyles.bottomSheetContainer}>
              <Image
                style={tabNavStyles.bottomImg}
                source={require('../assets/images/bottom_bg.png')}
              />
              <View style={tabNavStyles.bottomView}>
                <View style={tabNavStyles.bottomSubView}>
                  <Text style={tabNavStyles.requestText}>Request</Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(setRequestBtn(false));
                      // navigation.goBack();
                    }}>
                    <CloseFilterBtn width={30} height={30} />
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
          </BottomSheet>
        ) : (
          <></>
        )}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default RootNavigator;
