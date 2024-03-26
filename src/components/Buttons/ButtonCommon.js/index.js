import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonsCommon = ({
  btnStyle,
  btnText,
  containerStyle,
  btnTextStyle,
  linearTextStyle,
  onSignIn,
  onPress,
  navRoute = false,
  img,
  imageSource,
}) => {
  return (
    <View style={[containerStyle]}>
      <LinearGradient
        colors={['#02ABEE6E', '#02ABEE', '#00F594']}
        style={[
          {borderRadius: 15, flexWrap: 'nowrap', margin: 2},
          linearTextStyle,
        ]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={[styles.circleGradient, btnStyle]}
          onPress={onPress}>
          {img ? <Image source={imageSource} /> : <></>}
          <Text style={[styles.btnText, btnTextStyle]}>{btnText}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ButtonsCommon;
