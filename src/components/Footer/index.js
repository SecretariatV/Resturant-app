import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import MenuBg from '../../assets/images/tabbar-center.svg';
import MenuBg from '../../assets/images/menubg-large1.svg';
import { heightToDp, widthToDp } from '../../utils/Dimensions.js';

const Footer = () => {
  return (
    <MenuBg
      width={widthToDp(100)}
      style={{
        position: 'absolute',
        bottom: -38,
        left: 0,
        right: 0,
        elevation: 1,
      }}
    />
  );
};

export default Footer;
