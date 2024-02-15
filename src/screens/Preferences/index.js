import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import BackgroundLayout from '../../components/BackgroundLayout';
import MenuCustomization from '../../components/MenuCustomization';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';

const Preferences = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderCommon
        showSkipBtn={false}
        title={'Menu Customization'}
        showValet={false}
      />

      <MenuCustomization label={'Diet'} show={false} />

      <MenuCustomization label={'Diet'} />
      <MenuCustomization label={'Diet'} />

      <ButtonsCommon
        // btnStyle={styles.saveButton}
        containerStyle={styles.saveButton}
        btnText={'Next'}
        navRoute="PreferencesSuccess"
      />
    </View>
  );
};

export default Preferences;
