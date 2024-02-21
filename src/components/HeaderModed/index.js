import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const HeaderModed = ({
  slotLeft = null,
  slotCenter = null,
  slotRight = null,
  bannerImage = null,
}) => {
  return (
    <View className="header-hoc" style={styles.headerHoc}>
      {bannerImage}
      <View style={styles.headerContainer} className="header-container">
        <View style={styles.slotLeft} className="slot-left">
          {slotLeft}
        </View>
        <View style={styles.slotCenter} className="slot-center">
          {slotCenter}
        </View>
        <View style={styles.slotRight} className="slot-right">
          {slotRight}
        </View>
      </View>
    </View>
  );
};

export default HeaderModed;
