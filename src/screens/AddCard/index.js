import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import Hamburger from '../../assets/images/hamburger.png';
import FancyInput from '../../components/FancyInput';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';

const AddCard = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<MenuNavButton icon={Hamburger} iconType="image" />}
        slotCenter={<Text style={styles.headerText}>Add Card</Text>}
        slotRight={<></>}
      />
      <ScrollView>
        <View style={styles.cardContainer}>
          <FancyInput
            // iconImage={userIcon}
            fieldLabel="Card Number"
            // fieldValue={inputName}
            fieldPlaceHolder="type here"
            fieldInputStyle={styles.input}
            iconShow={false}
            // fieldCallback={setInputName}
          />

          <FancyInput
            // iconImage={userIcon}
            fieldLabel="Card Holder Name"
            // fieldValue={inputName}
            fieldPlaceHolder="type here"
            fieldInputStyle={styles.input}
            iconShow={false}
            // fieldCallback={setInputName}
          />
          <View style={styles.cardSubContainer}>
            <FancyInput
              fieldLabel="Expire Date"
              // fieldValue={inputName}
              fieldPlaceHolder="type here"
              fieldInputStyle={styles.smallInput}
              iconShow={false}
              // fieldCallback={setInputName}
            />
            <FancyInput
              fieldLabel="CVV"
              // fieldValue={inputName}
              fieldPlaceHolder="type here"
              fieldInputStyle={styles.smallInput}
              iconShow={false}
              // fieldCallback={setInputName}
            />
          </View>
          <View style={{marginTop: 20}}>
            <ButtonsCommon btnText={'Add Card'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddCard;
