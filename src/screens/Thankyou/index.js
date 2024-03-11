import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {height, heightToDp, widthToDp} from '../../utils/Dimensions';

import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import MenuNavButton from '../../components/MenuNavButton';
import FadedSeparator from '../../components/FadedSeparator';
import ReviewCard from '../../components/ReviewCard';
import Footer from '../../components/Footer';

import Hamburger from '../../assets/images/hamburger.png';
import Clock from '../../assets/images/clock.svg';
import Dress from '../../assets/images/dress.svg';
import Confetti from '../../assets/images/confetti.svg';
import resturant_cover from '../../assets/images/restaurant_cover.png';
import {Colors} from '../../theme';
import {reviews, ageGroup, cuisine, dressCode} from '../../utils/demodata';
import GradientText from '../../components/GradientText';

const Thankyou = () => {
  // const gradientColors = isToggled
  //   ? ['#02ABEE6E', '#02ABEE', '#00F594']
  //   : ['rgba(255, 255, 255, 0.10)', 'rgba(255, 255, 255, 0.10)'];

  return (
    <View style={styles.container}>
      <BackgroundLayout />
      <HeaderModed
        slotLeft={
          <MenuNavButton
            icon={Hamburger}
            iconType="image"
            containerStyle={{
              position: 'absolute',
              top: 0,
            }}
          />
        }
        slotCenter={<></>}
        slotRight={<></>}
      />

      <ScrollView style={styles.restaurantScrollView}>
        <View
          class="thankyou-content-container"
          style={styles.thankyouContentContainer}>
          <Confetti width={150} style={styles.confettiImage} />

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
          <LinearGradient
            colors={['#02ABEE6E', '#02ABEE', '#00F594']}
            useAngle={true}
            angle={300}
            style={{
              flexWrap: 'nowrap',
              alignSelf: 'center',
              fontSize: 12,
            }}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Text style={styles.gradientText}>$100.00</Text>
          </LinearGradient>
        </View>
      </ScrollView>
      {/* <Footer /> */}
    </View>
  );
};

export default Thankyou;
