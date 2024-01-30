import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import HeaderCommon from '../../components/HeaderCommon';
import BackgroundLayout from '../../components/BackgroundLayout';
import MenuCustomization from '../../components/MenuCustomization';
import ToggleButton from '../../components/ToggleButton';
import {widthToDp} from '../../utils/Dimensions';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';

const Preferences = () => {
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
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderCommon
        show={true}
        title={'Edit Diet'}
        logoStyle={{marginRight: widthToDp(10)}}
      />
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

      <ButtonsCommon
        // btnStyle={styles.saveButton}
        containerStyle={styles.saveButton}
        btnText={'Save'}
        navRoute="Preferences"
      />

      {/* <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Preferences;
