import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const FadedSeparator = ({fancyGradBorderStyle}) => {
  return (
    <View className="faded-separator-container" style={styles.container}>
      <LinearGradient
        colors={['#ffffff00', '#ffffff66', '#ffffff66', '#ffffff00']}
        style={styles.fancyGrad}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View style={[styles.fancyGradBorder, fancyGradBorderStyle]}>
          <View style={styles.fancyGradBorderChild} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default FadedSeparator;
