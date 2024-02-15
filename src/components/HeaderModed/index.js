import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackButton from '../Buttons/BackButton/index.js';
import SkipButton from '../Buttons/SkipButton/index.js';
import { heightToDp, widthToDp } from '../../utils/Dimensions.js';

const HeaderModed = ({slotLeft = null, slotCenter = null, slotRight = null}) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: heightToDp(15),
      }}
      className="header-container">
      <View
        style={{width: '20%'}}
        className="slot-left">
        {slotLeft}
      </View>
      <View
        style={{width: '60%'}}
        className="slot-center">
        {slotCenter}
      </View>
      <View
        style={{width: '20%'}}
        className="slot-right">
        {slotRight}
      </View>
    </View>
  );
};

export default HeaderModed;
