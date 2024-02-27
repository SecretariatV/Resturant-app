import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const BackgroundCard = ({children, style, childrenStyle, linearBackStyle}) => {
  return (
    <View style={style}>
      <LinearGradient
        colors={['#FFFFFF22', '#FFFFFF22', '#00000022', '#00000022']}
        useAngle
        angle={300}
        style={[styles.linearBack, linearBackStyle]}
        start={{x: 1, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View
          style={[
            // !showMenu && styles.menuGradient,
            styles.circleTwoGradient,
            childrenStyle,
          ]}
          //   onPress={() => (!showMenu ? handleButton() : null)}
        >
          {children}
        </View>
      </LinearGradient>
    </View>
  );
};

export default BackgroundCard;
