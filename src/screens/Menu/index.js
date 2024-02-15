import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';

const Menu = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderCommon
        showSkipBtn={true}
        showValet={true}
        showMenu={true}
        show={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Text>Menu</Text>
      </View>
    </View>
  );
};

export default Menu;
