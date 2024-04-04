import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const ButtonsCommonAlt = ({
  btnStyle,
  btnText,
  linearTextStyle,
  containerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[containerStyle]}>
      <LinearGradient
        // colors={['#02ABEE6E', '#02ABEE', '#00F594']}
        colors={['#045386', '#078891']}
        useAngle={true}
        angle={45}
        style={{borderRadius: 20, flexWrap: 'nowrap'}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <LinearGradient
          // colors={['#02ABEE6E', '#02ABEE', '#00F594']}
          colors={['#040B1B', '#042B4A', '#045386']}
          // useAngle={true}
          // angle={45}
          style={[
            {borderRadius: 20, flexWrap: 'nowrap', margin: 1},
            linearTextStyle,
          ]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <TouchableOpacity
            style={[styles.circleGradient, btnStyle]}
            onPress={onPress}>
            <Text style={styles.btnText}>{btnText}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonsCommonAlt;
