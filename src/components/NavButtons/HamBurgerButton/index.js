import {TouchableOpacity} from 'react-native';
import React from 'react';
import HamBurger from '../../../assets/images/hamburger.svg';
import {useNavigation} from '@react-navigation/native';

const HamBurgerButton = ({onPress, style}) => {
  const navigation = useNavigation(); // Access navigation object

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <TouchableOpacity onPress={openDrawer} style={style}>
      <HamBurger />
    </TouchableOpacity>
  );
};

export default HamBurgerButton;
