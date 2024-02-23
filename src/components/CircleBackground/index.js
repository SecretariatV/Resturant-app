import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CircleBackground = ({children, style}) => {
  return (
    <View style={styles.container}>
      {children}
      {/* <LottieView
                          source={fish}
                          autoPlay
                          // loop
                          // Additional props for customization
                          speed={1.5}
                          resizeMode="contain"
                          style={{width: 20, height: 20, margin: 5}}
                        /> */}
    </View>
  );
};

export default CircleBackground;
