import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';

const Pay = () => {
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
          <Text>Pay</Text>
      </View>
    </View>
  );
};

export default Pay;
