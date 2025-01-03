import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import BackgroundLayout from '../../components/BackgroundLayout';
import MenuCustomization from '../../components/MenuCustomization';
import ToggleButton from '../../components/ToggleButton';
import {widthToDp} from '../../utils/Dimensions';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../components/NavButtons/BackButton/index.js';
import HeaderModed from '../../components/HeaderModed/index.js';

const Preferences = () => {
  const navigation = useNavigation();

  const diet = [
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
    {
      name: 'Gluten',
    },
  ];

  const handleDynamicNavigation = () => {
    navigation.navigate('Preferences');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderModed
        slotLeft={<BackButton />}
        slotCenter={<Text style={styles.headerTitle}>Edit Preferences</Text>}
      />
      <View style={{paddingHorizontal: 15}}>
        <Text style={styles.select}>Select Diet</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: widthToDp(3),
          }}>
          {diet.map((item, index) => (
            <ToggleButton name={item.name} key={index} />
          ))}
        </View>
      </View>

      <ButtonsCommon
        // btnStyle={styles.saveButton}
        containerStyle={styles.saveButton}
        btnText={'Save'}
        onPress={() => handleDynamicNavigation()}
        // navRoute="Preferences"
      />
    </View>
  );
};

export default Preferences;
