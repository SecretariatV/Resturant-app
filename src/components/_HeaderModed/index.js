import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackButton from '../Buttons/BackButton/index.js';
import SkipButton from '../Buttons/SkipButton/index.js';
import {heightToDp, widthToDp} from '../../utils/Dimensions.js';

const HeaderModed = ({
  slotLeft = null,
  slotCenter = null,
  slotRight = null,
}) => {
  return (
    <View
      style={{
        // position: 'absolute',
        // bottom: 0,
        // top: 10,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: heightToDp(15),
        marginTop: Platform.OS == 'ios' ? heightToDp(12) : 10,
        // marginTop: Platform.OS == 'ios' ? 70 : 10,
      }}
      className="header-container">
      <View style={{width: '20%'}} className="slot-left">
        {slotLeft}
      </View>
      <View
        style={{width: '60%', alignItems: 'center'}}
        className="slot-center">
        {slotCenter}
      </View>
      <View style={{width: '20%'}} className="slot-right">
        {slotRight}
      </View>
    </View>
  );
};

export default HeaderModed;
