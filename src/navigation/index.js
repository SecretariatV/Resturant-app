//packages
import {View, Text, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import DrawerNavigation from '../screens/drawer/DrawerNavigation';

// styles
import {tabNavStyles} from './tabNavigatorStyles';
// authstack screens
import Splash from '../screens/Splash';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Privacy from '../screens/auth/Privacy';
import Settinglist from '../screens/settings/SettingList';
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
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Restaurant from '../screens/Restaurant';
import MenuDetail from '../screens/MenuDetail';
import IngredientCustomization from '../screens/IngredientCustomization';
// import ResturantMenu from '../screens/ResturantMenu';

// utils
import {heightToDp, widthToDp} from '../utils/Dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {screenToTextSize} from '../utils/helper';
// icons
import BackBtn from '../assets/images/tabbar-back.svg';
import TobBargb from '../assets/images/tabbar-bg.svg';
import MenuBg from '../assets/images/tabbar-center.svg';
import MenuIcon from '../assets/images/tabbar-menu.svg';
import QrIcon from '../assets/images/tabbar-qr.svg';
import {useSelector} from 'react-redux';
import PaymentOption from '../screens/PaymentOption';
import AddCard from '../screens/AddCard';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const HomeStacked = createNativeStackNavigator();

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

const HomeStack = ({activeRestaurant}) => {
  return (
    <Stack.Navigator
      initialRouteName="PaymentOption"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}

      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      {/* <Stack.Screen name="SecondTabNavigator" component={SecondTabNavigator} /> */}

      <Stack.Screen name="MenuDetail" component={MenuDetail} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="RestaurantMain" component={RestaurantMain} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen
        name="IngredientCustomization"
        component={IngredientCustomization}
      />
      <Stack.Screen name="PaymentOption" component={PaymentOption} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator>
  );
};

const PayStack = ({activeRestaurant}) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondTabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}

      <Stack.Screen name="SecondTabNavigator" component={SecondTabNavigator} />

      <Stack.Screen name="MenuDetail" component={MenuDetail} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="RestaurantMain" component={RestaurantMain} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen
        name="IngredientCustomization"
        component={IngredientCustomization}
      />
      <Stack.Screen name="PaymentOption" component={PaymentOption} />
    </Stack.Navigator>
  );
};

// const DrawerNav = () => {};

const TabNavigator = ({activeRestaurant}) => {
  // const qRorMenu = activeRestaurant ? Menu : QrCode;
  const qRorMenuText = activeRestaurant ? 'Menu' : 'QrCode';
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      backBehavior="history"
      screenListeners={({navigation, route}) => ({
        tabPress: e => {},
      })}
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarHideOnKeyboard: true,
        tabBarPosition: 'bottom',
        tabBarShowLabel: false,
        tabBarStyle: tabNavStyles.tabNavigatorBarStyle,
      })}>
      <Tab.Screen
        name="Back"
        component={RestaurantMain}
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
                  left: -10,
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-back.png')}
                />
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Back
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={tabNavStyles.tabNavRequestBtn}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-request.png')}
                />
                <Text style={tabNavStyles.tabNavRequestBtnText}>Requests</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={qRorMenuText}
        component={Menu}
        options={{
          tabBarLabel: ({focused}) => {
            focused ? 'QrCode' : 'dadadad';
          },
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={
                  activeRestaurant
                    ? tabNavStyles.tabNavMenuBtn
                    : tabNavStyles.tabNavQrCodeScannerBtn
                }>
                {focused ? (
                  <MenuIcon
                    width={screenToTextSize(8)}
                    style={{width: 12, height: 12}}
                  />
                ) : (
                  <QrIcon
                    width={screenToTextSize(8)}
                    style={{width: 12, height: 12}}
                  />
                )}
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      /> */}

      <Tab.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />

      {/* <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(16),
                  height: heightToDp(16),
                  backgroundColor: '#fff',
                  borderColor: '#0ad6c0',
                  borderWidth: 4,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignContent: 'center',
                  position: 'relative',
                  top: -10,
                  elevation: 5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                }}>
                <MenuIcon
                  width={screenToTextSize(8)}
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/tabbar-menu.svg')}
                />
              </View>
            );
          },
        }}
      /> */}

      {/* <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(16),
                  height: heightToDp(16),
                  backgroundColor: '#fff',
                  borderColor: '#0ad6c0',
                  borderWidth: 4,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignContent: 'center',
                  position: 'relative',
                  top: -10,
                  elevation: 5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                }}>activeRestaurant
                <MenuIcon
                  width={screenToTextSize(8)}
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/tabbar-menu.svg')}
                />
              </View>
            );
          },
        }}
      /> */}
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
                  source={require('../assets/images/tabbar-cart.png')}
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
        name="Pay"
        component={Pay}
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
                  source={require('../assets/images/tabbar-pay.png')}
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

const SecondTabNavigator = ({activeRestaurant}) => {
  // const qRorMenu = activeRestaurant ? Menu : QrCode;
  const qRorMenuText = activeRestaurant ? 'Menu' : 'QrCode';
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      backBehavior="history"
      screenListeners={({navigation, route}) => ({
        tabPress: e => {},
      })}
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarHideOnKeyboard: true,
        tabBarPosition: 'bottom',
        tabBarShowLabel: false,
        tabBarStyle: tabNavStyles.tabNavigatorBarStyle,
      })}>
      <Tab.Screen
        name="Back"
        component={RestaurantMain}
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
                  left: -10,
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-back.png')}
                />
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Back
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
  const user = useSelector(state => state.auth.user);
  console.log(user, '========user Data======');
  const [saveUser, setSaveUser] = useState(false);
  const [activeRestaurant, setActiveRestaurant] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const user = true;
  // useEffect(() => {
  //   getData();
  //   console.log(saveUser, 'saveUser');
  //   return () => {};
  // }, [saveUser, activeRestaurant]);
  useEffect(() => {
    console.log(user, 'user');
    if (user) {
    }
    // return () => {
    //   second
    // }
  }, [user]);

  const getData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        setSaveUser(user);
        console.log(user, 'value');
        // value previously stored
      }
    } catch (e) {
      console.log(e, 'e');
      // error reading value
    }
  };
  return (
    <NavigationContainer>
      {/* <View style={{  backgroundColor: 'transparent'}}>
        <Image resizeMethod='auto' resizeMode='contain' source={require('../assets/images/tabbar-bg.svg')} style={{ backgroundColor: 'transparent', width: widthToDp(100)}} />
      </View> */}
      {/* <DrawerNavigation /> */}
      {/* {!saveUser ? HomeStack(activeRestaurant) : AuthStack()} */}
      {user ? (
        <HomeStack />
      ) : (
        <AuthStack

        // initialParams={{onLogin: handleLogin}}
        />
      )}
    </NavigationContainer>
  );
};
export default RootNavigator;
