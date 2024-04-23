import React from 'react';
import {styles} from './styles';
import MenuBg from '../../assets/images/new_tab.svg';
import {width, widthToDp} from '../../utils/Dimensions.js';

const Footer = () => {
  console.log(width, 'width', 'widthtodp', widthToDp(100));
  return <MenuBg width={widthToDp(100)} style={styles.bgStyle} />;
};

export default Footer;
