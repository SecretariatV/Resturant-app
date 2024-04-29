import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';

import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';

import userIcon from '../../assets/images/userIcon.png';

import {Colors} from '../../theme';
import GradientText from '../../components/GradientText';
import {fonts} from '../../theme/FontFamily';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import FancyInput from '../../components/FancyInput/index.js';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const Thankyou = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={<HamBurgerButton />}
        slotCenter={<></>}
        slotRight={<></>}
      />

      <ScrollView style={styles.restaurantScrollView}>
        <View style={{marginBottom: heightToDp(25)}}>
          <View
            class="thankyou-content-container"
            style={styles.thankyouContentContainer}>
            {/* <Confetti width={150} style={styles.confettiImage} /> */}
            <LottieView
              source={require('../../assets/images/confetti.json')}
              autoPlay
              // loop
              // Additional props for customization
              loop={false}
              speed={1.5}
              resizeMode="contain"
              style={styles.lottieStyle}
            />
            <Text style={styles.underConfettiPara1}>Thank you for dining</Text>
            <View class="gradient-text" style={styles.gradientTextContainer}>
              <GradientText style={styles.gradientText}>
                Restaurant Name
              </GradientText>
            </View>
            <Text style={styles.underConfettiPara1}>
              <Text style={styles.gradientTextColored}>500 Points</Text> could
              have been claimed with this payment, download the app to collect
              Shareabill Rewards.
            </Text>
            <Text style={[{marginTop: 10}, styles.underConfettiPara1]}>
              You Paid
            </Text>
            <GradientText style={[styles.gradientText]}>$100.00 </GradientText>

            <Text
              style={{
                fontSize: 14,
                color: Colors.WHITE,
                // marginTop: 10,
                marginBottom: 10,
                fontFamily: fonts.URBANIST_REGULAR,
              }}>
              December 2nd, 2023
            </Text>

            <LinearGradient
              colors={['#00F69299', '#00A7F7FF']}
              useAngle={true}
              angle={820}
              style={{
                borderRadius: heightToDp(9),
                flexWrap: 'nowrap',
                width: '90%',
              }}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View style={styles.btnGradient}>
                <Text style={[styles.btnText]}>Remaining Bill Due</Text>
                <Text style={[styles.billPayment]}>$40</Text>
              </View>
            </LinearGradient>

            <ButtonsCommon
              onPress={() => navigation.navigate('RestaurantReview')}
              btnText={'Leave a Feedback!'}
              containerStyle={{marginVertical: 10, width: widthToDp(90)}}
            />

            {/* <Text style={styles.reciept}>Receive Receipt</Text> */}
          </View>
          <FancyInput
            fieldInputStyle={{alignSelf: 'flex-start', marginLeft: 15}}
            iconImage={userIcon}
            fieldLabel="Receive Receipt"
            containerStyle={{marginLeft: 15}}
            // fieldValue={inputPass}
            fieldPlaceHolder="Enter your Email"
            // fieldCallback={setInputPass}
          />
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default Thankyou;
