import {View, Text} from 'react-native';
import React from 'react';
import BackgroundLayout from '../../../components/BackgroundLayout';
import HeaderCommon from '../../../components/HeaderCommon';
import {widthToDp} from '../../../utils/Dimensions';
import {styles} from './styles';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../../components/Buttons/ButtonCommonAlt/index.js';

const Login = () => {
  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderCommon
        showSkipBtn={false}
        show={true}
        logoStyle={{marginRight: widthToDp(15)}}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: widthToDp(5),
        }}>
        <View style={styles.box}>
          <View style={styles.boxTwo}>
            <Text style={styles.startedTxt}>
              Let's Get Started with .
              <Text style={styles.startedTxtTwo}>Shareabill</Text>
            </Text>
            <Text style={styles.startedTxtThree}>
              Already have an account? Log in to dive back into your dining
              adventure.
            </Text>
            <Text style={styles.startedTxtThree}>
              New to Shareabill? Sign up now and unlock a world of effortless
              dining experiences.
            </Text>
          </View>
        </View>
        <View style={{marginTop: widthToDp(10)}}>
          <ButtonsCommon
            btnText={'Sign In'}
            containerStyle={{width: widthToDp(90)}}
            navRoute="LoginTwo"
          />
        </View>

        <View style={{marginTop: widthToDp(5)}}>
          <ButtonsCommonAlt btnText={'Sign Up'} />
        </View>
      </View>
    </View>
  );
};

export default Login;
