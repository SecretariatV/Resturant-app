import {View, Text, Animated, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../utils/Dimensions';

const Splash = () => {
  const navigation = useNavigation();

  const [opacity] = useState(new Animated.Value(0));
  const [imscale] = useState(new Animated.Value(1));

  useEffect(() => {
    // Use Animated.timing to gradually increase opacity after 2 seconds
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000, // You can adjust the duration as needed
      useNativeDriver: true,
    }).start();

    Animated.timing(imscale, {
      toValue: 1.5,
      duration: 2000, // You can adjust the duration as needed
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/backgroundTwo.png')}
        style={[styles.backgroundImage, {opacity}]}
      />
      {/* <Image source={require('../../assets/images/backgroundTwo.png')} /> */}
      {/* <BackgroundLayout /> */}
      <Animated.Image
        style={[
          {
            resizeMode: 'contain',
            width: widthToDp(50),
            transform: [{scale: imscale}],
          },
        ]}
        source={require('../../assets/images/image-two.png')}
      />
      {/* <Image source={require('../../assets/images/logo.png')} /> */}
    </View>
  );
};

export default Splash;
