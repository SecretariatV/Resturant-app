import {TouchableOpacity} from 'react-native';
import React from 'react';
import Search from '../../../assets/images/searchIcon.svg';
import {useNavigation} from '@react-navigation/native';

const SearchButton = ({onPress}) => {
  const navigation = useNavigation(); // Access navigation object

  return (
    <TouchableOpacity style={{marginRight: 10}}>
      <Search width={20} height={20} />
    </TouchableOpacity>
  );
};

export default SearchButton;
