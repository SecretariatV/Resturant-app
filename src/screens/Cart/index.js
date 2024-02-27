import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import MenuBg from '../../assets/images/tabbar-center.svg';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import Footer from '../../components/Footer';

const Cart = () => {
  console.log(widthToDp(100));
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <MenuBg
        width={widthToDp(100)}
        style={{
          position: 'absolute',
          bottom: -10,
          left: 0,
          right: 0,
          elevation: 1,
        }}
      />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<></>}
        slotRight={<></>}
      />
      {/* <HeaderCommon
        showSkipBtn={true}
        showValet={true}
        showMenu={true}
        show={true}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Cart</Text>
      </View>
      <Footer />
    </View>
  );
};

export default Cart;
