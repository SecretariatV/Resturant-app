import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderCommon from '../../components/HeaderCommon';
import Footer from '../../components/Footer';

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
      <Footer />
    </View>
  );
};

export default Pay;
