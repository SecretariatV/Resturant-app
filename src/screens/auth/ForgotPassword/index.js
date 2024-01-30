import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useState} from 'react';
import BackgroundLayout from '../../../components/BackgroundLayout';
import {styles} from './styles';
import HeaderCommon from '../../../components/HeaderCommon';

import FancyInput from '../../../components/FancyInput';
// icons
import userIcon from '../../../assets/images/userIcon.png';

import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';

const ForgotPassword = () => {
  const [inputName, setInputName] = useState('');
  const [inputLname, setInputLname] = useState('');

  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderCommon show={true} />
      <ScrollView
        style={styles.regFormScrollView}
        showsVerticalScrollIndicator={false}>
        <View className="join-screen-header-text">
          {/* <View
            className="join-screen-intro-wrapper"
            style={styles.joinWrapper}>
            <Text style={styles.joinTxt}></Text>
            <FancyText
              textSize={styles.joinTxt.fontSize}
              textColor="#00FC92"
              gradientColors={['#02ABEE66', '#02ABEE66', '#00F59466']}
              fancyText="Shareabill"
            />
            <Text style={styles.joinTxt}>for</Text>
          </View> */}
          <Text style={styles.forgotTxt}>Forgot Password?</Text>

          <View className="join-screen-under-intro-para">
            <Text style={styles.underJoinTxt}>
              Don't worry! It occurs. Please enter the email address linked with
              your account.
            </Text>
          </View>
        </View>
        <View className="join-screen-form" style={{marginTop: 10}}>
          <FancyInput
            iconImage={userIcon}
            fieldLabel="Enter your Email"
            fieldValue={inputName}
            fieldPlaceHolder="Enter your First name"
            fieldCallback={setInputName}
          />
        </View>
        <ButtonsCommon btnText={'Send Code'} />
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
