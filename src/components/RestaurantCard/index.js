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
// import star from '../../assets/images/star.png';
import Star from '../../assets/images/ratingStar.svg';

import {styles} from './styles';

import {useNavigation} from '@react-navigation/native';
import Location from '../../assets/images/location.svg';
import Colors from '../../constants/Colors';

const ResturantCard = ({name, location, cuisine}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Restaurant')}>
      <ImageBackground
        source={bg}
        style={styles.image}
        imageStyle={{borderRadius: 16, opacity: 0.7}}>
        <Image
          source={logoImage}
          style={{
            margin: 5,
            resizeMode: 'contain',
            borderColor: Colors.green,
            borderWidth: 4,
            borderRadius: 20,
          }}
        />
        {/* <View style={{margin: 5}}>
          <View style={styles.cardContainer}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.5</Text>
              <Image source={star} style={styles.starImg} />
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Location />

            <Text style={[styles.lightText, styles.location]}>{location}</Text>
          </View>
          <View style={styles.cuisineContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.cuisine}>Cuisine Type: </Text>
              <Text style={styles.lightText}>{cuisine}</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Image
                source={arrow}
                width={30}
                height={30}
                style={styles.arrow}
              />
            </View>
          </View>
        </View> */}
        <View style={{margin: 5, flexDirection: 'row'}}>
          <View
            className="restaurant-details"
            style={[styles.restaurantDetails]}>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.lightText, styles.location]}>{location}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.cuisine}>Cuisine Type: </Text>
              <Text style={styles.lightText}>{cuisine}</Text>
            </View>
          </View>
          <View className="restaurant-rating" style={styles.restaurantRating}>
            <View style={styles.restaurantRatingStar}>
              <Star style={styles.starImg} />
              <Text style={styles.rating}>4.5</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ResturantCard;
