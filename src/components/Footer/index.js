import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import MenuBg from '../../assets/images/tabbar-center.svg';
import MenuBg from '../../assets/images/footer.svg';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions.js';
import FooterImage from '../../assets/images/footer.png';
import {getPlatformSpecificValue} from '../../utils/helper.js';
const Footer = () => {
  console.log(width, 'width', 'widthtodp', widthToDp(100));
  return (
    <MenuBg
      width={widthToDp(100)}
      style={{
        position: 'absolute',
        bottom:
          width > 375
            ? getPlatformSpecificValue(-15, -15)
            : getPlatformSpecificValue(-32, -32),
        left: 0,
        right: 0,
        elevation: 1,
      }}
    />
    // <Image
    //   source={FooterImage}
    //   width={widthToDp(100)}
    //   style={{
    //     position: 'absolute',
    //     // backgroundColor: 'red',
    //     bottom:
    //       width == 375
    //         ? getPlatformSpecificValue(-145, -137)
    //         : getPlatformSpecificValue(-135, -155),
    //     left: 0,
    //     right: 0,
    //     // bottom: -155,
    //     width: widthToDp(100),
    //     // resizeMode: 'contain',
    //     objectFit: 'contain',
    //   }}
    // />
  );
};

export default Footer;
