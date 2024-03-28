import {TouchableOpacity} from 'react-native';
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
      <Fav />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
