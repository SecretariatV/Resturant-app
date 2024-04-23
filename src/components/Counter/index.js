import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Image} from 'react-native';
import {Colors} from '../../theme';
import {widthToDp} from '../../utils/Dimensions';

const Counter = ({
  minusContainerStyle,
  minusStyle,
  plusStyle,
  plusContainerStyle,
  counterTextStyle,
  vertical = false,
}) => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <View>
      {!vertical ? (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.minusContainer, minusContainerStyle]}
            onPress={() => handleDecrement()}>
            <Image
              source={require('../../assets/images/minus.png')}
              style={[{width: 26, height: 3}, minusStyle]}
            />
          </TouchableOpacity>

          <Text style={[styles.counterTxt, counterTextStyle]}>{value}</Text>

          <TouchableOpacity
            style={[styles.minusContainer, plusContainerStyle]}
            onPress={() => handleIncrement()}>
            <Image
              source={require('../../assets/images/plus.png')}
              style={[{width: 20, height: 20}, plusStyle]}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            // backgroundColor: 'red',
            justifyContent: 'center',
            width: widthToDp(15),
          }}>
          <TouchableOpacity
            style={[styles.minusContainer, minusContainerStyle]}
            onPress={() => handleDecrement()}>
            <Image
              source={require('../../assets/images/minus.png')}
              style={[{width: 26, height: 3}, minusStyle]}
            />
          </TouchableOpacity>

          <Text style={[styles.counterTxt, counterTextStyle]}>{value}</Text>

          <TouchableOpacity
            style={[styles.minusContainer, plusContainerStyle]}
            onPress={() => handleIncrement()}>
            <Image
              source={require('../../assets/images/plus.png')}
              style={[{width: 20, height: 20}, plusStyle]}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Counter;
