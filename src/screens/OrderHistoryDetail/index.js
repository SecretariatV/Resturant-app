import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import Footer from '../../components/Footer';
import HeaderModed from '../../components/HeaderModed';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {commonStyles} from '../../theme';

const OrderHistoryDetail = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={
          <Text style={commonStyles.headerText}>Order History Details</Text>
        }
        slotRight={<></>}
      />
      <Text>OrderHistoryDetail</Text>
      <Footer />
    </View>
  );
};

export default OrderHistoryDetail;
