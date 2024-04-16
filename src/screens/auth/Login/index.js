import {View, Text, Image} from 'react-native';
import React from 'react';
import BackgroundLayout from '../../../components/BackgroundLayout';
import HeaderCommon from '../../../components/HeaderCommon';
import {widthToDp} from '../../../utils/Dimensions';
import {styles} from './styles';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import ButtonsCommonAlt from '../../../components/Buttons/ButtonCommonAlt/index.js';
import HeaderModed from '../../../components/HeaderModed/index.js';

import Back from '../../../assets/images/back.svg';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../../components/NavButtons/BackButton/index.js';
import HamBurgerButton from '../../../components/NavButtons/HamBurgerButton/index.js';

const Login = () => {
  const navigation = useNavigation();

  const handleDynamicNavigation = () => {
    navigation.navigate('LoginTwo');
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        headerStyle={{paddingHorizontal: 0}}
        slotLeft={<BackButton onPress={() => navigation.goBack()} />}
        slotCenter={
          <Image
            source={require('../../../assets/images/image-two.png')}
            style={{
              resizeMode: 'contain',
              width: widthToDp(45),
              height: widthToDp(100),
            }}
          />
        }
        slotRight={<></>}
      />
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: widthToDp(2),
        }}>
        <View style={styles.outerBox}>
          <View style={styles.innerBox}>
            <Text style={styles.startedTxt}>
              Let's Get Started with{' '}
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
            // navRoute="LoginTwo"
            onPress={() => handleDynamicNavigation()}
          />
        </View>

        <View style={{marginTop: widthToDp(5)}}>
          <ButtonsCommonAlt
            btnText={'Sign Up'}
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
