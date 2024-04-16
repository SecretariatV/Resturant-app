import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const FancyText = ({
  gradientColors = ['#02ABEE6E', '#02ABEE', '#00F594'],
  bgOpacity,
  textColor = '#fff',
  textSize = 12,
  fancyText,
}) => {
  return (
    <View className="fancy-text-container" style={styles.container}>
      <View
        className="fancy-text-wrapper"
        style={[styles.wrapper, {opacity: bgOpacity}]}>
        <LinearGradient
          colors={gradientColors}
          style={styles.lingrad}
          // useAngle={true}
          // angle={90}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={styles.textWrapper}>
            <Text
              style={[
                styles.textContent,
                {color: textColor, fontSize: textSize},
              ]}>
              {fancyText}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default FancyText;
