import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import HeaderCommon from '../../../components/HeaderCommon';
import HeaderModed from '../../../components/HeaderModed/index.js';
import BackgroundLayout from '../../../components/BackgroundLayout';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {width, widthToDp, heightToDp} from '../../../utils/Dimensions';
import Swiper from 'react-native-swiper';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import {useNavigation} from '@react-navigation/native';

const Welcome = props => {
  const navigation = useNavigation();
  const handleDynamicNavigation = () => {
    console.log('kmdsakas');
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<></>}
        slotCenter={
          <Image source={require('../../../assets/images/logo.png')} />
        }
        slotRight={<></>}
      />
      {/* <HeaderCommon show={false} /> */}

      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        showsPagination={false}>
        <View style={styles.slide1}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={{
                width: widthToDp(100),
                objectFit: 'contain',
                height: heightToDp(80),
              }}
              source={require('../../../assets/images/chef.png')}
            />
            <Text style={styles.welcomeTxt}>Welcome To</Text>

            <View style={{alignSelf: 'center', marginTop: 5}}>
              <LinearGradient
                colors={['#02ABEE6E', '#02ABEE', '#00F594']}
                style={{borderRadius: 10, flexWrap: 'nowrap'}}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <View style={styles.circleGradient}>
                  <Text style={styles.shareABillTxt}>Shareabill</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.byeTxt}>
              "Say goodbye to waiting{' '}
              <Text style={styles.byeTxtTwo}>
                and hello to instant, hassle-free dining. Shareabill brings you
                a revolutionary platform to enhance your restaurant and
                hospitality”
              </Text>
            </Text>
          </View>
          <View style={styles.dotContainer}>
            <LinearGradient
              colors={['#28A79B', '#02ABEE']}
              style={styles.greenDot}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.sliderDot}></View>
            </LinearGradient>

            <View style={styles.sliderDotTwo}></View>
          </View>

          <View style={{marginTop: widthToDp(7)}}>
            <ButtonsCommon
              btnText={'Continue'}
              navRoute={'Signup'}
              containerStyle={{width: widthToDp(90)}}
            />
          </View>
        </View>

        <View style={styles.slide1}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../../assets/images/qr_code.png')} />
            <Text style={styles.welcomeTxt}>Instant Access to </Text>

            <View style={{alignSelf: 'center', marginTop: 5}}>
              <LinearGradient
                colors={['#02ABEE6E', '#02ABEE', '#00F594']}
                style={{borderRadius: 15, flexWrap: 'nowrap'}}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}>
                <View style={styles.circleGradient}>
                  <Text style={styles.shareABillTxt}>Dining Magic</Text>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.byeTxt}>
              "Effortlessly{' '}
              <Text style={styles.byeTxtTwo}>
                scan your table's QR code for instant menu access. Explore,
                customize, and place your order seamlessly, putting the joy back
                in dining."
              </Text>
            </Text>
          </View>
          <View style={styles.dotContainer}>
            <View style={styles.sliderDotTwoQr}></View>
            <LinearGradient
              colors={['#28A79B', '#02ABEE']}
              style={styles.greenDot}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.sliderDot}></View>
            </LinearGradient>
          </View>
          <View style={{marginTop: widthToDp(10)}}>
            <ButtonsCommon
              onPress={() => {
                navigation.navigate('Login');
              }}
              btnText={'Continue'}
              containerStyle={{width: widthToDp(90)}}

              // onPressFunc={handleDynamicNavigation}
              // screenName={'Login'}
              // onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default Welcome;
