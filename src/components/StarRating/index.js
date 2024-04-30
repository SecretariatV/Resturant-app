import {View, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import YellowStar from '../../assets/images/ratingstarYellow.svg';
import WhiteStar from '../../assets/images/ratingstarWhite.svg';
const StarRating = ({rating, isEditable = false, starSize = 15, style}) => {
  const [fillto, setFillTo] = useState(rating);

  const handleRatingChange = newRating => {
    setFillTo(newRating);
  };

  return (
    <View class="star-container" style={[styles.starContainer, style]}>
      {Array.from({length: 5}, (_, index) =>
        fillto >= index + 1 ? (
          <Pressable
            onPress={isEditable ? () => handleRatingChange(index + 1) : null}>
            <YellowStar key={index} width={starSize} />
          </Pressable>
        ) : (
          <Pressable
            onPress={isEditable ? () => handleRatingChange(index + 1) : null}>
            <WhiteStar key={index} width={starSize} />
          </Pressable>
        ),
      )}
    </View>
  );
};

export default StarRating;
