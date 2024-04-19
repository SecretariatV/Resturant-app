import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fav from '../../../assets/images/fav.svg';
import {useNavigation} from '@react-navigation/native';

const FavouriteButton = ({onPress}) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('HomeScreens');
  };
  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <Image
        source={require('../../../assets/images/fav.png')}
        style={{width: 40, height: 40}}
      />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
