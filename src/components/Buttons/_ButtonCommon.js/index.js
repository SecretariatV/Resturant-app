import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

const ButtonsCommon = ({
  btnStyle,
  btnText,
  containerStyle,
  btnTextStyle,
  navRoute = false,
}) => {
  const navigation = useNavigation();
  const handleClick = () => {
    if (navRoute) {
      navigation.navigate(navRoute);
    } else {
      console.log(' chal  bhag yeha se');
    }
  };
  return (
    <View style={[containerStyle]}>
      <LinearGradient
        colors={['#02ABEE6E', '#02ABEE', '#00F594']}
        // colors={['#040B1B', '#045386']}
        style={{borderRadius: 20, flexWrap: 'nowrap', margin: 2}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={[styles.circleGradient, btnStyle]}
          onPress={() => {
            handleClick();
            console.log('first');
          }}>
          <Text style={[styles.btnText, btnTextStyle]}>{btnText}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ButtonsCommon;
