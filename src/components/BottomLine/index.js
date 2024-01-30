import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const BottomLine = () => {
  return (
    <LinearGradient
      colors={[
        'rgba(200,200,200, 0)',
        'rgba(200,200,200, 0.30)',
        'rgba(200,200,200, 0.7)',
        'rgba(200,200,200, 0.7)',
        'rgba(200,200,200, 0.30)',
        'rgba(200,200,200, 0.0)',
      ]}
      style={{width: '100%'}}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <View style={styles.gradientContainer}>
        <View style={{flex: 1, height: 1}}></View>
      </View>
    </LinearGradient>
  );
};

export default BottomLine;
