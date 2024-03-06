import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Image} from 'react-native';
import {Colors} from '../../theme';

const Counter = ({
  minusContainerStyle,
  minusStyle,
  plusStyle,
  plusContainerStyle,
  counterTextStyle,
  vertical = false,
}) => {
  return (
    <View>
      {!vertical ? (
        <View style={styles.container}>
          <TouchableOpacity style={[styles.minusContainer, plusContainerStyle]}>
            <Image
              source={require('../../assets/images/plus.png')}
              style={[{width: 20, height: 20}, plusStyle]}
            />
          </TouchableOpacity>

          <Text style={[styles.counterTxt, counterTextStyle]}>30</Text>
          <TouchableOpacity
            style={[styles.minusContainer, minusContainerStyle]}>
            <Image
              source={require('../../assets/images/minus.png')}
              style={[{width: 26, height: 3}, minusStyle]}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={[styles.minusContainer, plusContainerStyle]}>
            <Image
              source={require('../../assets/images/plus.png')}
              style={[{width: 20, height: 20}, plusStyle]}
            />
          </TouchableOpacity>

          <Text style={[styles.counterTxt, counterTextStyle]}>30</Text>
          <TouchableOpacity
            style={[styles.minusContainer, minusContainerStyle]}>
            <Image
              source={require('../../assets/images/minus.png')}
              style={[{width: 26, height: 3}, minusStyle]}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Counter;
