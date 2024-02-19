import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import {Rating} from '@rneui/themed';
import {Rating, AirbnbRating} from 'react-native-ratings';
import FadedSeparator from '../FadedSeparator';

const ReviewCard = ({name, time, detail, img}) => {
  return (
    <View style={{}}>
      <View style={styles.review_container}>
        <Image source={require('../../assets/images/review_profile.png')} />

        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'center',
            }}>
            <Rating imageSize={20} ratingCount={5} tintColor="#03020C" />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.review_detail}>{detail}</Text>
      <FadedSeparator />
    </View>
  );
};

export default ReviewCard;
