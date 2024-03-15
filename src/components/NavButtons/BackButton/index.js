import {TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../../../assets/images/back.svg';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Back />
    </TouchableOpacity>
  );
};

export default BackButton;
