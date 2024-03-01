import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import BackgroundLayout from '../../../components/BackgroundLayout';
import {styles} from './styles';
import HeaderCommon from '../../../components/HeaderCommon';
import LinearGradient from 'react-native-linear-gradient';
import FancyText from '../../../components/FancyText';
import FancyInput from '../../../components/FancyInput';
import SeparatorText from '../../../components/SeparatorText';
import FadedSeparator from '../../../components/FadedSeparator';
// icons
import userIcon from '../../../assets/images/userIcon.png';
import emailIcon from '../../../assets/images/emailIcon.png';
import phoneIcon from '../../../assets/images/phoneIcon.png';
import passIcon from '../../../assets/images/passIcon.png';
import fbLoginIcon from '../../../assets/images/fbLoginIcon.png';
import gLoginIcon from '../../../assets/images/gLoginIcon.png';
import aLoginIcon from '../../../assets/images/aLoginIcon.png';
import {useNavigation} from '@react-navigation/native';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginTwo = ({route}) => {
  // const {onLogin} = route.params;
  console.log(route.params, 'route.params');
  const navigation = useNavigation();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPass, setInputPass] = useState('');
  const handleLogin = () => {
    // Perform login actions
    // Call onLogin to set isLoggedIn to true
    onLogin();
  };
  useEffect(() => {}, []);
  const storeData = async value => {
    console.log('herrreee');
    try {
      await AsyncStorage.setItem('user', 'true');
      navigation.navigate('RestaurantMain');
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />

      <HeaderCommon show={true} logoStyle={{opacity: 0}} />
      <ScrollView style={styles.regFormScrollView}>
        <View className="join-screen-header-text">
          <View
            className="join-screen-intro-wrapper"
            style={styles.joinWrapper}>
            <Text style={styles.joinTxt}>Welcome Back to</Text>
          </View>
          <View
            className="join-screen-intro-wrapper"
            style={[styles.joinWrapper, {marginLeft: -5}]}>
            <FancyText
              textSize={styles.joinTxt.fontSize}
              textColor="#00FC92"
              gradientColors={['#02ABEE66', '#02ABEE66', '#00F59466']}
              fancyText="Shareabill"
            />
          </View>
          <View className="join-screen-under-intro-para">
            <Text style={styles.underJoinTxt}>
              Log in to your account and rediscover the joy of instant,
              hassle-free dining. Your delightful experiences are just a login
              away
            </Text>
          </View>
        </View>
        <View className="join-screen-form">
          <FancyInput
            iconImage={emailIcon}
            fieldLabel="Email"
            fieldValue={inputEmail}
            fieldPlaceHolder="Enter your Email"
            fieldCallback={setInputEmail}
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
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.underline}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.signInBtn}>
          <LinearGradient
            colors={['#02ABEE6E', '#02ABEE', '#00F594']}
            style={{borderRadius: 15, flexWrap: 'nowrap'}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <TouchableOpacity
              style={styles.circleGradient}
              onPress={() => navigation.navigate('Preferences')}>
              <Text style={styles.signInBtn.btnTxt}>Sign In</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> */}

        <ButtonsCommon
          btnText={'Sign In'}
          // navRoute="Menu"
          onPress={() => storeData()}
        />

        <SeparatorText separatorText="or Sign In with" />
        <View
          className="social-login-icons-container"
          style={styles.socialLoginBtnContainer}>
          <TouchableOpacity style={styles.socialLoginBtns}>
            <Image source={fbLoginIcon} style={styles.socialLoginBtnIcons} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialLoginBtns}>
            <Image source={gLoginIcon} style={styles.socialLoginBtnIcons} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialLoginBtns}>
            <Image source={aLoginIcon} style={styles.socialLoginBtnIcons} />
          </TouchableOpacity>
        </View>
        <FadedSeparator />
        <View class="already-account-text" style={styles.alreadyAccount}>
          <Text style={styles.alreadyAccount.textContent}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
          // onPress={() => navigation.navigate('RestaurantMain')}
          >
            <Text style={styles.underline}>Sign in.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <LinearGradient
        colors={[
          'rgba(200,200,200, 0)',
          'rgba(200,200,200, 0.30)',
          'rgba(200,200,200, 0.7)',
          'rgba(200,200,200, 0.7)',
          'rgba(200,200,200, 0.30)',
          'rgba(200,200,200, 0.0)',
        ]}
        style={{width: '100%'}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View
          style={{
            borderBottomColor: 'transparent',
            borderBottomWidth: 1,
            width: '100%',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',

            // alignSelf: 'stretch',
            // flex: 1,
          }}>
          <View style={{flex: 1, height: 1}}></View>
        </View>
      </LinearGradient> */}

      {/* <LinearGradient
        colors={['#00A7F700', '#00A7F7', '#00FC92', '#00FC9200']}
        style={{width: '100%'}}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View
          style={{
            borderBottomColor: 'transparent',
            borderBottomWidth: 1,
            width: '100%',
            flexWrap: 'nowrap',
            flexDirection: 'row',
            alignItems: 'center',

          }}>
          <View style={{flex: 1, height: 1}}></View>
        </View>
      </LinearGradient> */}
    </View>
  );
};

export default LoginTwo;
