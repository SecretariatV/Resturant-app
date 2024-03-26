import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const RestaurantButton = ({btnText, style, onPress, btnTextStyle}) => {
  return (
    <View style={style}>
      <LinearGradient
        colors={['#00F69299', '#00A7F7FF']}
        useAngle={true}
        angle={820}
        style={{borderRadius: 22, flexWrap: 'nowrap', margin: 2}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity style={styles.circleGradient} onPress={onPress}>
          <Text style={[styles.btnText, btnTextStyle]}>{btnText}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default RestaurantButton;
