import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useState} from 'react';
import BackgroundLayout from '../../../components/BackgroundLayout';
import {styles} from './styles';
import HeaderCommon from '../../../components/HeaderCommon';

import FancyInput from '../../../components/FancyInput';
// icons

import passIcon from '../../../assets/images/passIcon.png';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import HeaderModed from '../../../components/HeaderModed/index.js';

const CreatePassword = () => {
  const [inputPass, setInputPass] = useState('');

  return (
    <View style={styles.container}>
      <BackgroundLayout />

      {/* <HeaderCommon show={true} /> */}
      <HeaderModed />
      <View className="join-screen-header-text">
        <Text style={styles.forgotTxt}>Create Password</Text>

        <View className="join-screen-under-intro-para">
          <Text style={styles.underJoinTxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
        </View>
      </View>
      <View className="join-screen-form" style={{marginTop: 10}}>
        <FancyInput
          iconImage={passIcon}
          fieldLabel="Password"
          fieldValue={inputPass}
          fieldPlaceHolder="Enter your Password"
          fieldCallback={setInputPass}
          fieldIsPassword={true}
        />
        <FancyInput
          iconImage={passIcon}
          fieldLabel="Password"
          fieldValue={inputPass}
          fieldPlaceHolder="Enter your Password"
          fieldCallback={setInputPass}
          fieldIsPassword={true}
        />
      </View>
      <View style={{marginTop: 15}}>
        <ButtonsCommon btnText={'Change Password'} />
      </View>
    </View>
  );
};

export default CreatePassword;
