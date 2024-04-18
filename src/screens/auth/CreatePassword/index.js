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
import BackButton from '../../../components/NavButtons/BackButton/index.js';
import {useNavigation} from '@react-navigation/native';

const CreatePassword = () => {
  const navigation = useNavigation();

  const [inputPass, setInputPass] = useState('');

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <View style={{paddingHorizontal: 15}}>
        <HeaderModed
          headerStyle={{paddingHorizontal: 0}}
          slotLeft={<BackButton onPress={() => navigation.goBack()} />}
          slotCenter={<></>}
          slotRight={<></>}
        />
        <View className="join-screen-header-text">
          <Text style={styles.forgotTxt}>Create New Password</Text>

          <View className="join-screen-under-intro-para">
            <Text style={styles.underJoinTxt}>
              Password to include one capital letter, one number and one symbol.
            </Text>
          </View>
        </View>
        <View className="join-screen-form" style={{marginTop: 10}}>
          <FancyInput
            iconImage={passIcon}
            fieldLabel="Enter Password"
            fieldValue={inputPass}
            fieldPlaceHolder="Password here"
            fieldCallback={setInputPass}
            fieldIsPassword={true}
          />
          <FancyInput
            iconImage={passIcon}
            fieldLabel="Confirm Password"
            fieldValue={inputPass}
            fieldPlaceHolder="Password here"
            fieldCallback={setInputPass}
            fieldIsPassword={true}
          />
        </View>
        <View style={{marginTop: 15}}>
          <ButtonsCommon
            btnText={'Change Password'}
            onPress={() => navigation.navigate('LoginTwo')}
          />
        </View>
      </View>
    </View>
  );
};

export default CreatePassword;
