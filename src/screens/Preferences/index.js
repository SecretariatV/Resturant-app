import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import BackgroundLayout from '../../components/BackgroundLayout';
import MenuCustomization from '../../components/MenuCustomization';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/NavButtons/BackButton/index.js';

const Preferences = () => {
  const navigation = useNavigation();

  const handleDynamicNavigation = () => {
    navigation.navigate('Preferences');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      {/* <HeaderCommon
        showSkipBtn={false}
        title={'Menu Customization'}
        showValet={false}
      /> */}
      <HeaderModed
        slotLeft={<></>}
        slotCenter={<Text style={styles.headerTitle}>Menu Customization</Text>}
        slotRight={<></>}
      />
      <MenuCustomization label={'Diet'} show={false} />

      <MenuCustomization label={'Diet'} />
      <MenuCustomization label={'Diet'} />

      <ButtonsCommon
        // btnStyle={styles.saveButton}
        containerStyle={styles.saveButton}
        btnText={'Next'}
        // navRoute="PreferencesSuccess"
        onPress={() => handleDynamicNavigation()}
      />
    </View>
  );
};

export default Preferences;
