import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import heart from '../../assets/images/heart.png';
import {widthToDp} from '../../utils/Dimensions';
import Search from '../../components/Search';
import {Colors} from '../../theme';

const Menu = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<Text>Menu</Text>}
        slotRight={
          <MenuNavButton
            icon={heart}
            iconType="image"
            iconStyle={{
              width: widthToDp(8),
              height: widthToDp(8),
              margin: 5,
            }}
          />
        }
      />
      {/* <HeaderCommon
        showSkipBtn={true}
        showValet={true}
        showMenu={true}
        show={true}
      /> */}
      <Search />
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={{
              transform: [{rotate: '-90deg'}],
              color: Colors.WHITE,
              marginTop: 40,
              backgroundColor: 'red',
              margin: 0,
            }}>
            Previously ordered
          </Text>

          <Text
            style={{
              transform: [{rotate: '-90deg'}],
              color: Colors.WHITE,
              marginTop: 50,
            }}>
            Top Picks
          </Text>
        </View>
        <View style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
      </View>
    </View>
  );
};

export default Menu;
