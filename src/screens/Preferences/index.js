import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import BackgroundLayout from '../../components/BackgroundLayout';
import MenuCustomization from '../../components/MenuCustomization';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/NavButtons/BackButton/index.js';
import HeaderModed from '../../components/HeaderModed/index.js';

const Preferences = () => {
  const navigation = useNavigation();

  const handleDynamicNavigation = () => {
    navigation.navigate('PreferencesSuccess');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderModed
        slotLeft={<></>}
        slotCenter={<Text style={styles.headerTitle}>Menu Customization</Text>}
        slotRight={<></>}
      />
      <View style={{paddingHorizontal: 15}}>
        <MenuCustomization label={'Diet'} show={false} />

        <MenuCustomization label={'Allergies'} />
        <MenuCustomization label={'Meat Types'} />
      </View>

      <ButtonsCommon
        containerStyle={styles.saveButton}
        btnText={'Next'}
        onPress={() => handleDynamicNavigation()}
      />
    </View>
  );
};

export default Preferences;
