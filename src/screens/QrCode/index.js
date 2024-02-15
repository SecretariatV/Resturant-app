import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  ImageBackground,
  BackHandler,
  StyleSheet,
  Dimensions,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import styles from './styles';

const QrCode = () => {
  useEffect(() => {
    const deviceWidth = Dimensions.get('screen').width;
    console.log(deviceWidth);
  }, []);
  const onSuccess = e => {
    console.log('QR code scanned:', e.data);
    // Handle the scanned QR code data here
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        permissionDialogMessage="We need permission to access your camera"
        reactivateTimeout={2000}
        showMarker={true}
        markerStyle={{borderColor: '#FFF', borderRadius: 10}}
        bottomContent={
          <Text style={styles.centerText}>
            Place a QR code within the frame to scan it
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
  },
});

export default QrCode;
