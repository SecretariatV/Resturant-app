import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackButton from '../Buttons/BackButton/index.js';
import SkipButton from '../Buttons/SkipButton/index.js';

const HeaderCommon = ({
  show,
  showSkipBtn,
  showLogo,
  logoStyle,
  title,
  showMenu,
  showValet,

  menuBtn,
}) => {
  return (
    <View style={styles.headerContainer}>
      {show && <BackButton showMenu={showMenu} />}
      {/* {menuBtn && } */}
      {showLogo && (
        <View style={[{flex: 1, alignItems: 'center'}, logoStyle]}>
          <Image source={require('../../assets/images/logo.png')} />
        </View>
      )}

      <View style={[{flex: 1, alignItems: 'center'}, logoStyle]}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {showSkipBtn && (
        <View style={styles.skipBtnContainer}>
          <SkipButton showValetImg={showValet} />
          <Text></Text>
        </View>
      )}
    </View>
  );
};

export default HeaderCommon;
