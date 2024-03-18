import {TouchableOpacity} from 'react-native';
import React from 'react';
import Fav from '../../../assets/images/fav.svg';

const FavouriteButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Fav />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
