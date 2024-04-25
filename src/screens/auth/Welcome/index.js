import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderModed from '../../../components/HeaderModed/index.js';
import BackgroundLayout from '../../../components/BackgroundLayout';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {width, widthToDp, heightToDp} from '../../../utils/Dimensions';
import Swiper from 'react-native-swiper';
import ButtonsCommon from '../../../components/Buttons/ButtonCommon.js';
import {useNavigation} from '@react-navigation/native';
import {SelectCountry} from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    lable: 'EN',
    image: require('../../../assets/images/US.png'),
  },
  // {
  //   value: '2',
  //   lable: 'Country 2',
  //   image: {
  //     uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
  //   },
  // },
];
const Welcome = props => {
  const [country, setCountry] = useState('1');

  const navigation = useNavigation();
  const handleDynamicNavigation = () => {
    console.log('kmdsakas');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<></>}
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
        slotRight={
          <>
            <SelectCountry
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              imageStyle={styles.imageStyle}
              iconStyle={styles.iconStyle}
              containerStyle={{backgroundColor: 'red'}}
              itemContainerStyle={{backgroundColor: 'red'}}
              itemTextStyle={{color: 'red'}}
              maxHeight={200}
              value={country}
              data={local_data}
              valueField="value"
              labelField="lable"
              imageField="image"
              placeholder="Select country"
              searchPlaceholder="Search..."
              onChange={e => {
                setCountry(e.value);
              }}
            />
          </>
        }
      />
      <ScrollView>
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

            <View style={{flexDirection: 'row', marginHorizontal: 3}}>
              <Text style={styles.byeTxt}>
                "Say goodbye{' '}
                <Text style={styles.byeTxtTwo}>
                  to waiting and hello to instant, hassle-free dining.
                  Shareabill brings you a revolutionary platform to enhance your
                  restaurant and hospitality”
                </Text>
              </Text>
            </View>
            <View style={styles.dotContainer}>
              <View style={styles.sliderDot}></View>

              <View style={styles.sliderDotTwo}></View>
            </View>

            <View style={{marginTop: widthToDp(7)}}>
              <ButtonsCommon
                btnText={'Continue'}
                // navRoute={'Signup'}
                onPress={() => handleDynamicNavigation()}
                containerStyle={{width: widthToDp(90)}}
              />
            </View>
          </View>

          <View style={styles.slide1}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../assets/images/qr_code.png')}
                style={{height: heightToDp(70), resizeMode: 'contain'}}
              />
              <Text style={styles.welcomeTxt}>Instant Access to </Text>

              <View style={{alignSelf: 'center', marginTop: 5}}>
                <LinearGradient
                  colors={['#02ABEE6E', '#02ABEE', '#00F594']}
                  style={{borderRadius: 10, flexWrap: 'nowrap'}}
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
                  customize, and place your order seamlessly, putting the joy
                  back in dining."
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
      </ScrollView>
    </View>
  );
};

export default Welcome;
