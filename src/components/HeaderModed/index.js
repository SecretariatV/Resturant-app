import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const HeaderModed = ({
  slotLeft = null,
  slotCenter = null,
  slotRight = null,
  bannerImage = null,
  headerStyle,
}) => {
  let bannerStylesHoc = bannerImage
    ? styles.headerHoc
    : styles.headerHocNoBanner;
  let bannerStylesContainer = bannerImage
    ? styles.headerContainer
    : styles.headerContainerNoBanner;
  return (
    <View className="header-hoc" style={bannerStylesHoc}>
      {bannerImage}
      <View
        style={[bannerStylesContainer, headerStyle]}
        className="header-container">
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
