import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Rating} from 'react-native-ratings';
import FadedSeparator from '../FadedSeparator';
import {widthToDp} from '../../utils/Dimensions';

const ReviewCard = ({name, time, detail, img}) => {
  return (
    <View style={{}}>
      <View style={styles.review_container}>
        <Image source={require('../../assets/images/review_profile.png')} />

        <View style={{marginLeft: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: widthToDp(80),
            }}>
            <Text style={styles.name}>{name}</Text>
            {/* <Image
              source={require('../../assets/images/three_dots.png')}
              style={{width: 12, height: 12, marginTop: 5}}
              resizeMode="contain"
            /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
