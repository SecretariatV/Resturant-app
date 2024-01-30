import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
// import {widthToDp} from '../../utils/Dimensions'

const SeparatorText = ({separatorText}) => {
  return (
    <View className="separator-text-container" style={styles.container}>
      <View className="separator-text-wrapper" style={styles.wrapper}>
        <LinearGradient
          colors={['#ffffff00', '#ffffff66', '#ffffff66', '#ffffff00']}
          style={styles.fancyGrad}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.fancyGradBorder}>
            <View style={styles.fancyGradBorderChild} />
          </View>
        </LinearGradient>
        <Text className="separator-text-content" style={styles.separatorText}>
          {separatorText}
        </Text>
        <LinearGradient
          colors={['#ffffff00', '#ffffff66', '#ffffff66', '#ffffff00']}
          style={styles.fancyGrad}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.fancyGradBorder}>
            <View style={styles.fancyGradBorderChild} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SeparatorText;
