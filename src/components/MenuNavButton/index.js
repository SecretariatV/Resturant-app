import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {heightToDp, widthToDp} from '../../utils/Dimensions.js';
import LinearGradient from 'react-native-linear-gradient';

const MenuNavButton = ({
  icon,
  iconType,
  iconStyle,
  containerStyle,
  handleClick = () => {},
}) => {
  return (
    <View
      className="menu-btn-container"
      style={[styles.menuBtnContainer, containerStyle]}>
      <LinearGradient
        colors={['#5A9CA9', '#345B61']}
        useAngle
        angle={250}
        style={styles.linearGradient}
        start={{x: 1, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          className="touchableBtn"
          style={[
            iconType === 'svg' && styles.touchableBtnSVG,
            iconType !== 'svg' && styles.touchableBtnIMG,
          ]}
          onPress={() => handleClick()}>
          {iconType === 'svg' ? (
            icon
          ) : (
            <Image
              resizeMode="contain"
              style={[styles.menuIcon, iconStyle]}
              source={icon}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default MenuNavButton;
