import {
  View,
  Animated,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';
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
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {SvgXml} from 'react-native-svg';

// icons
import BackBtn from '../assets/images/tabbar-back.svg';
import TobBargb from '../assets/images/tabbar-bg.svg';
import MenuBg from '../assets/images/tabbar-center.svg';
import MenuIcon from '../assets/images/tabbar-menu.svg';

// tab screens
import Home from '../screens/Home';
import Pay from '../screens/Pay';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Requests from '../screens/Requests';
import {heightToDp, widthToDp} from '../utils/Dimensions';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const user = true;

const relativeFont = (numb) => {
  let screenSize = widthToDp(100);
  return screenSize * (numb/100);
}
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

      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'relative'
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
        const centerMenu = options.title == 'menu'
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, position: 'absolute', bottom: 0, backgroundColor: 'transparent' }}>
            <Text style={{color: isFocused ? '#673ab7' : '#FFF'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      // tabBar={props => <MyTabBar  {...props} />}
      tabBarOptions={{
        backgroundColor: '#f00',
      }}
      initialRouteName="Home"
      backBehavior="initialRoute"
      style={{backgroundColor: '#f00'}}
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          // if (route.state && route.state.routeNames.length > 0) {
          //   navigation.navigate('Device');
          // }
          // console.log('Something happened')
        },
      })}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          // backgroundColor: '#2d2d3d',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          paddingVertical: 10,
          height: heightToDp(20),
        },
      })}>
      <Tab.Screen
        name="Back"
        component={Home}
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
                  left: -10
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-back.png')}
                />
                <Text style={{color: '#fff', fontSize: relativeFont(3) }}>Back</Text>
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
                    height: 2
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
                  right: -20
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-cart.png')}
                />
                <Text style={{color: '#fff', fontSize: relativeFont(3) }}>Cart</Text>
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
                  right: -10
                }}>
                <Image
                  style={{width: 16, height: 16}}
                  source={require('../assets/images/tabbar-pay.png')}
                />
                <Text style={{color: '#fff', fontSize: relativeFont(3) }}>Pay</Text>
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
  return (
    <NavigationContainer>
      {/* <View style={{  backgroundColor: 'transparent'}}>
        <Image resizeMethod='auto' resizeMode='contain' source={require('../assets/images/tabbar-bg.svg')} style={{ backgroundColor: 'transparent', width: widthToDp(100)}} />
      </View> */}
      {user ? HomeStack() : AuthStack()}
    </NavigationContainer>
  );
};
export default RootNavigator;
