import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
// import background from '../images/background3.png';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const statusBar = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const BackgroundLayout = ({withImages}) => {
  return (
    <Image
      source={
        withImages
          ? require('../assets/images/Splash.png')
          : require('../assets/images/backgroundTwo.png')
      }
      style={styles.background_image}
    />
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({
  background_image: {
    height: '100%',
    width: screenWidth,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
});
