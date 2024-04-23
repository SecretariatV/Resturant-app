import {TouchableOpacity} from 'react-native';
import React from 'react';
import Filter from '../../../assets/images/filter.svg';
import {useNavigation} from '@react-navigation/native';

const FilterButton = ({onPress}) => {
  const navigation = useNavigation();

  const handleClick = () => {
    // navigation.navigate('HomeScreens');
  };
  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <Filter />
    </TouchableOpacity>
  );
};

export default FilterButton;
