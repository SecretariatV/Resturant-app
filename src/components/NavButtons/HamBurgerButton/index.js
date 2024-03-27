import {TouchableOpacity} from 'react-native';
import React from 'react';
import HamBurger from '../../../assets/images/hamburger.svg';
import {useNavigation} from '@react-navigation/native';

const HamBurgerButton = ({onPress}) => {
  const navigation = useNavigation(); // Access navigation object

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPress={openDrawer}>
      <HamBurger />
    </TouchableOpacity>
  );
};

export default HamBurgerButton;
