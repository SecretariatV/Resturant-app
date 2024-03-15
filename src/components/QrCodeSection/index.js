import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import GradientText from '../GradientText';

const QrCodeSection = ({qrText, qrImage, code}) => {
  return (
    <View style={styles.qrCodeContainer}>
      <GradientText style={styles.textGrad}>{qrText}</GradientText>

      <View style={styles.qrSub}>
        <Image
          source={require('../../assets/images/qr.png')}
          style={styles.qrImg}
        />
      </View>
      <View style={styles.copyContainer}>
        <View style={styles.code}>
          <Text style={styles.codeText}>{code}</Text>
        </View>
        <View style={styles.copyCode}>
          <Text style={styles.copyText}>Copy Code</Text>
          <Image source={require('../../assets/images/copy.png')} />
        </View>
      </View>
    </View>
  );
};

export default QrCodeSection;
