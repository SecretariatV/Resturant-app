import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';

const Requests = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      {/* <HeaderCommon
        showSkipBtn={true}
        showValet={true}
        showMenu={true}
        show={true}
      /> */}
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Requests</Text>
      </View>
    </View>
  );
};

export default Requests;
