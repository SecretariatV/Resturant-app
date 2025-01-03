import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

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
  imgStyle,
}) => {
  return (
    <View style={[containerStyle]}>
      <LinearGradient
        colors={['#02ABEE6E', '#02ABEE', '#00F594']}
        style={[
          {borderRadius: 22, flexWrap: 'nowrap', margin: 2},
          linearTextStyle,
        ]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={[styles.circleGradient, btnStyle]}
          onPress={onPress}>
          {img ? <Image source={imageSource} style={[imgStyle]} /> : <></>}
          <Text style={[styles.btnText, btnTextStyle]}>{btnText}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ButtonsCommon;
