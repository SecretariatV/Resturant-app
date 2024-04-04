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
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../../redux/actions/auth.js';
import HeaderModed from '../../../components/HeaderModed/index.js';
import BackButton from '../../../components/NavButtons/BackButton/index.js';
const LoginTwo = ({route}) => {
  const user = useSelector(state => state.auth.user);
  console.log(user, 'login twoser Data======');
  const dispatch = useDispatch();

  // const {onLogin} = route.params;
  const navigation = useNavigation();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPass, setInputPass] = useState('');

  useEffect(() => {}, []);
  const storeData = () => {
    dispatch(setUser());
  };
  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        headerStyle={{paddingHorizontal: 0}}
        slotLeft={<BackButton onPress={() => navigation.goBack()} />}
        slotCenter={<></>}
        slotRight={<></>}
      />
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
        <View class="already-account-text" style={styles.alreadyAccount}>
          <Text style={styles.alreadyAccount.textContent}>
            You don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.underline}>Sign Up.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginTwo;
