import React from 'react';
import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';

const BackgroundLayout = ({withImages, imgStyle}) => {
  return (
    <FastImage
      source={
        withImages
          ? require('../assets/images/Splash.png')
          : require('../assets/images/bgV2.png')
      }
      style={[styles.background_image, imgStyle]}
      resizeMode={FastImage.resizeMode.cover}
      priority={FastImage.priority.high} // or 'high' depending on your import
    />
    // <BG width={200} height={200} />
  );
};

export default BackgroundLayout;

const styles = StyleSheet.create({
  background_image: {
    height: '100%',
    width: '100%',
    // resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
});
