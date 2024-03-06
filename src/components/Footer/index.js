import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import MenuBg from '../../assets/images/tabbar-center.svg';
import MenuBg from '../../assets/images/footer.svg';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions.js';

const Footer = () => {
  console.log(width, 'width', 'widthtodp', widthToDp(100));
  return (
    <MenuBg
      width={widthToDp(100)}
      style={{
        position: 'absolute',

        bottom: width == 375 ? -38 : -15,
        left: 0,
        right: 0,
        elevation: 1,
      }}
    />
  );
};

export default Footer;
