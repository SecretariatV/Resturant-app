import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import GradientText from '../../components/GradientText';
import QrCodeSection from '../../components/QrCodeSection';

const GeneratedQrCode = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <View style={styles.backgroundContainer}>
        <QrCodeSection
          code={'32413'}
          qrText={
            ' To proceed with the cash payment please share the below QR code with a waiter.'
          }
        />
      </View>
    </View>
  );
};

export default GeneratedQrCode;
