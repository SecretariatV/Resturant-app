import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Image} from 'react-native';
import {Colors} from '../../theme';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.minusContainer}>
        <Image
          source={require('../../assets/images/minus.png')}
          style={{width: 26, height: 3}}
        />
      </TouchableOpacity>

      <Text style={styles.counterTxt}>30</Text>
      <TouchableOpacity
        style={[styles.minusContainer, {backgroundColor: Colors.GREEN}]}>
        <Image
          source={require('../../assets/images/plus.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
