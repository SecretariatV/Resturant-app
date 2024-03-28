//packages

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
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
import {useSelector} from 'react-redux';
import HomeIcon from '../assets/images/home.svg';
import ButtonsCommon from '../components/Buttons/ButtonCommon.js';
import CloseFilterBtn from '../assets/images/closeBtnFilter.svg';
import RestaurantReview from '../screens/RestaurantReview/index.js';
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
// const HomeStacked = createNativeStackNavigator();
const Drawer = createDrawerNavigator(); // Create a Drawer navigator

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
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
      <Drawer.Screen name="Home" component={HomeStack} />
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

const HomeStack = ({activeRestaurant}) => {
  console.log('activeRestaurant', activeRestaurant, typeof activeRestaurant);
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="MenuDetail"
          component={MenuDetail}
          // options={() => ({
          //   presentation: 'modal',
          // })}
        />
        <Stack.Screen
          name="IngredientCustomization"
          component={IngredientCustomization}
          options={() => ({
            presentation: 'modal',
          })}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="HomeScreens"
          component={HomeScreens}
          // options={{
          //   animationTypeForReplace: 'pop',
          //   animation: 'slide_from_right',
          // }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Requests" component={Requests} />
        <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
        <Stack.Screen name="RestaurantMain" component={RestaurantMain} />
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
        <Stack.Screen
          name="OrderHistoryDetail"
          component={OrderHistoryDetail}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const TabNavigator = ({activeRestaurant}) => {
  return (
    <Tab.Navigator
      initialRouteName="RestaurantMain"
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
        name="RestaurantMain"
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
                  style={{width: 24, height: 24, opacity: 0.6}}
                  source={require('../assets/images/home.png')}
                />
                {/* <HomeIcon width={25} height={25} style={{ opacity: 0.5, marginBottom: -5}}/> */}
                <Text style={{color: '#fff', fontSize: screenToTextSize(3)}}>
                  Home
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
                  style={{width: 24, height: 24}}
                  source={require('../assets/images/tabbar-request.png')}
                />
                <Text style={tabNavStyles.tabNavRequestBtnText}>Requests</Text>
              </View>
            );
          },
        }}
        // listeners={() => ({
        //   tabPress: e => {
        //     console.log('listern is working');
        //     e.preventDefault();
        //     // setShowFilter(true);
        //   },
        // })}
      />
      {!activeRestaurant ? (
        <Tab.Screen
          name={'RestaurantMenu'}
          component={RestaurantMenu}
          options={{
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
          options={{
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
          }}
        />
      )}

      <Tab.Screen
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
        name="Restaurant"
        component={Restaurant}
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
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    console.log(user, 'user');
    if (user) {
    }
  }, [user]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {user ? <DrawerScreens /> : <AuthStack />}
        {user ? (
          <BottomSheet modalProps={{}} isVisible={showFilter}>
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
                      setShowFilter(false);
                      // navigation.goBack();
                    }}>
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
                  />
                  <ButtonsCommon
                    btnText={'Coal change'}
                    containerStyle={{marginTop: 10}}
                    btnTextStyle={{marginLeft: 10}}
                    img
                    imageSource={require('../assets/images/coal.png')}
                    btnStyle={tabNavStyles.btnStyle}
                  />

                  <ButtonsCommon
                    btnText={'Ashtray'}
                    containerStyle={{marginTop: 10}}
                    btnTextStyle={{marginLeft: 20}}
                    img
                    imageSource={require('../assets/images/ashtray.png')}
                    btnStyle={tabNavStyles.btnStyle}
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
