import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, constant} from './constant';
import FadedSeparator from '../../components/FadedSeparator';
import BottomLine from '../../components/BottomLine';
import {widthToDp} from '../../utils/Dimensions';
// import Icon from '../../components/Icons'
const test = [
  {
    name: 'Favorites',
    // imgSource: require('../../assets/images/menu-fav.png'),
    // icob: require('../../assets/images/menu-fav.png'),
  },
  {
    name: 'Order history',
  },
  {
    name: 'Rewards',
  },
  {
    name: 'Wallet',
  },
  {
    name: 'Settings',
  },
  {
    name: 'Notification',
  },
  {
    name: 'Language Selection',
  },
];
const DrawerItem = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
  activeItemColor,
  color,
  styles,
  imgSource,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[
        styles.drawerItem,
        {
          backgroundColor: activeItemColor,
          justifyContent: 'center',
          // justifyContent: 'flex-start',
          alignItems: 'center',
        },
      ]}>
      <View style={[styles.iconContainer, {backgroundColor: color}]}>
        <Image
          source={imgSource}
          style={{resizeMode: 'contain', height: 20, width: 20}}
        />
        {/* <Icon type={type} name={name} color={colors.white} /> */}
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text style={[styles.label]}>{label}</Text>

        <FadedSeparator fancyGradBorderStyle={{width: widthToDp(60)}} />
      </View>
    </TouchableOpacity>
  );
};

const DrawerItemList = ({state, descriptors, navigation, styles}) => {
  console.log(styles.view, 'styles');
  return (
    <View style={[]}>
      {test.map((route, index) => {
        // const isFocused = state.index === index;
        // const {options} = descriptors[route.key];
        // const onPress = () => {
        //   const event = navigation.emit({
        //     type: 'tabPress',
        //     target: route.key,
        //   });
        //   if (!isFocused && !event.defaultPrevented) {
        //     navigation.navigate(route.name);
        //   }
        // };
        // {
        //   console.log(options);
        // }
        // const drawerItem = options.item;
        // const activeItemColor = isFocused ? colors.primary : null;
        // return (
        //   <DrawerItem
        //     key={index}
        //     label={route.name}
        //     imgSource={route.imgSource}
        //     // tabBarTestID={options.tabBarTestID}
        //     // onPress={onPress}
        //     // name={drawerItem.icon}
        //     // type={drawerItem.type}
        //     // notification={drawerItem.notification}
        //     // color={'red'}
        //     // activeItemColor={activeItemColor}
        //     styles={styles}
        //   />
        // );
      })}
    </View>
  );
};

export default DrawerItemList;
