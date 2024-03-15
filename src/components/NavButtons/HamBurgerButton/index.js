import {TouchableOpacity} from 'react-native';
import React from 'react';
import HamBurger from '../../../assets/images/hamburger.svg';

const HamBurgerButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HamBurger />
    </TouchableOpacity>
  );
};

export default HamBurgerButton;
