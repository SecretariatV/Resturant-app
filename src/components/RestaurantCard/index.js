import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import bg from '../../assets/images/restaurant_back.png';
import arrow from '../../assets/images/arrow.png';

import logoImage from '../../assets/images/resturant_log.png';
import star from '../../assets/images/star.png';

import {styles} from './styles';

import {useNavigation} from '@react-navigation/native';

const ResturantCard = ({name, location, cuisine}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Restaurant')}>
      <ImageBackground
        source={bg}
        style={styles.image}
        imageStyle={{borderRadius: 10}}>
        {/* <Text style={styles.text}>Inside</Text> */}
        <Image source={logoImage} style={{margin: 5, resizeMode: 'contain'}} />
        <View style={{margin: 5}}>
          <View style={styles.cardContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.5</Text>
              <Image source={star} style={styles.starImg} />
            </View>
          </View>
          <Text style={[styles.lightText, styles.location]}>{location}</Text>
          <View style={styles.cuisineContainer}>
            <Text style={styles.cuisine}>Cuisine Type: </Text>
            <Text style={styles.lightText}>{cuisine}</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Image source={arrow} width={20} height={20} style={styles.arrow} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ResturantCard;
