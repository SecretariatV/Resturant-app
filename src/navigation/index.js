import {View, Animated, Text} from 'react-native';
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
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrCode from '../screens/QrCode';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();
const user = false;
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
      <Stack.Screen
        name="QrCode"
        options={{
          headerShown: false,
        }}
        component={QrCode}
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

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="QrCode"
      backBehavior="initialRoute"
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
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="QrCode" component={QrCode} />
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
      {!user ? HomeStack() : AuthStack()}
    </NavigationContainer>
  );
};
export default RootNavigator;
