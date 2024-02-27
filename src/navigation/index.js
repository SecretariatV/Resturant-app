import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
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
import Splash from '../screens/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrCode from '../screens/QrCode';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {SvgXml} from 'react-native-svg';
import DrawerNavigation from '../screens/drawer/DrawerNavigation';

// icons
import BackBtn from '../assets/images/tabbar-back.svg';
import TobBargb from '../assets/images/tabbar-bg.svg';
import MenuBg from '../assets/images/tabbar-center.svg';
import MenuIcon from '../assets/images/tabbar-menu.svg';

// tab screens
import Home from '../screens/RestaurantMain';
import Pay from '../screens/Pay';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Requests from '../screens/Requests';
import {heightToDp, widthToDp} from '../utils/Dimensions';
import Restaurant from '../screens/Restaurant';
// import ResturantMenu from '../screens/ResturantMenu';
import MenuDetail from '../screens/MenuDetail';
import RestaurantMain from '../screens/RestaurantMain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IngredientCustomization from '../screens/IngredientCustomization';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const HomeStacked = createNativeStackNavigator();

const relativeFont = numb => {
  let screenSize = widthToDp(100);
  return screenSize * (numb / 100);
};
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Splash'}>
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={Welcome}
      />
      <Stack.Screen
        name="Signup"
        options={{
          headerShown: false,
        }}
        component={Signup}
      />
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
        component={Login}
      />
      <Stack.Screen
        name="Privacy"
        options={{
          headerShown: false,
        }}
        component={Privacy}
      />
      <Stack.Screen
        name="SettingList"
        options={{
          headerShown: false,
        }}
        component={Settinglist}
      />
      <Stack.Screen
        name="Preferences"
        options={{
          headerShown: false,
        }}
        component={Preferences}
      />
      <Stack.Screen
        name="EditPreferences"
        options={{
          headerShown: false,
        }}
        component={EditPreferences}
      />
      <Stack.Screen
        name="PreferencesSuccess"
        options={{
          headerShown: false,
        }}
        component={PreferencesSuccess}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{
          headerShown: false,
        }}
        component={ForgotPassword}
      />
      <Stack.Screen
        name="CreatePassword"
        options={{
          headerShown: false,
        }}
        component={CreatePassword}
      />

      <Stack.Screen
        name="LoginTwo"
        options={{
          headerShown: false,
        }}
        component={LoginTwo}
      />

      <Stack.Screen
        name="Verification"
        options={{
          headerShown: false,
        }}
        component={Verification}
      />

      {/* <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen
        name="QrCode"
        options={{
          headerShown: false,
        }}
        component={QrCode}
      />

      <Stack.Screen
        name="Restaurant"
        options={{
          headerShown: false,
        }}
        component={Restaurant}
      /> */}
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="IngredientCustomization"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="MenuDetail" component={MenuDetail} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen
        name="RestaurantMain"
        options={{
          headerShown: false,
        }}
        component={RestaurantMain}
      />
      <Stack.Screen
        name="QrCode"
        options={{
          headerShown: false,
        }}
        component={QrCode}
      />

      <Stack.Screen
        name="Restaurant"
        options={{
          headerShown: false,
        }}
        component={Restaurant}
      />

      <Stack.Screen
        name="IngredientCustomization"
        options={{
          headerShown: false,
        }}
        component={IngredientCustomization}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // tabBar={props => <MyTabBar  {...props} />}
      // tabBarOptions={{
      //   backgroundColor: '#f00',
      // }}
      initialRouteName="Menu"
      backBehavior="initialRoute"
      style={{backgroundColor: '#f00'}}
      screenListeners={({navigation, route}) => ({
        tabPress: e => {},
      })}
      screenOptions={({route}) => ({
        headerShown: false,
        // tabBarHideOnKeyboard: true,

        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          // backgroundColor: '#2d2d3d',
          backgroundColor: 'transparent',

          borderTopWidth: 0,

          borderColor: 'transparent',
          paddingVertical: 10,
          height: heightToDp(20),
        },
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
                <Text style={{color: '#fff', fontSize: relativeFont(3)}}>
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
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 5,
                  width: widthToDp(15),
                  position: 'relative',
                  left: -20,
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-request.png')}
                />
                <Text style={{color: '#fff', fontSize: relativeFont(3)}}>
                  Requests
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Restaurant"
        component={Restaurant}
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
                  width={relativeFont(8)}
                  style={{width: 12, height: 12}}
                  source={require('../assets/images/tabbar-menu.svg')}
                />
              </View>
            );
          },
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
                  width={relativeFont(8)}
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
                }}>
                <MenuIcon
                  width={relativeFont(8)}
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
                <Text style={{color: '#fff', fontSize: relativeFont(3)}}>
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
                <Text style={{color: '#fff', fontSize: relativeFont(3)}}>
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

// const DrawerNavigator = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       screenOptions={({route}) => ({
//         headerShown: false,
//       })}>
//       <Drawer.Screen name="Home" component={TabNavigator} />
//     </Drawer.Navigator>
//   );
// };
const RootNavigator = () => {
  const [saveUser, setSaveUser] = useState(false);
  // const user = true;
  useEffect(() => {
    getData();
    console.log(saveUser, 'saveUser');
    return () => {};
  }, [saveUser]);

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
      {saveUser ? HomeStack() : AuthStack()}
    </NavigationContainer>
  );
};
export default RootNavigator;
