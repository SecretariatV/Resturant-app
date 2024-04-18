import {View, Text} from 'react-native';
import React from 'react';
import BackgroundLayout from '../../components/BackgroundLayout';
import HeaderModed from '../../components/HeaderModed';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {fonts} from '../../theme/FontFamily';
import {Colors} from '../../theme';
import ButtonsCommon from '../../components/Buttons/ButtonCommon.js';
import HamBurgerButton from '../../components/NavButtons/HamBurgerButton';
import {widthToDp} from '../../utils/Dimensions.js';

const FeedbackSuccess = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <H */}
      <BackgroundLayout />
      <HeaderModed slotLeft={<HamBurgerButton />} />
      <View
        style={{
          alignItems: 'center',
          marginTop: 100,
          width: '90%',
          justifyContent: 'center ',
        }}>
        <LinearGradient
          colors={['#00FC9299', '#00A7F799']}
          style={[
            {
              borderRadius: 15,
              flexWrap: 'nowrap',
              // margin: 2,
              width: 150,
              height: 150,
              borderRadius: 75,
            },
          ]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View style={[styles.circleGradient]}>
            <LottieView
              source={require('../../assets/images/checked.json')}
              autoPlay
              // loop
              // Additional props for customization
              loop={false}
              speed={1.5}
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                margin: 5,
                padding: 10,
              }}
            />
          </View>
        </LinearGradient>

        <Text
          style={{
            fontFamily: fonts.URBANIST_BOLD,
            fontSize: 26,
            color: Colors.WHITE,
            textAlign: 'center',
            width: widthToDp(70),
            marginTop: 15,
          }}>
          Feedback Submitted successfully
        </Text>

        <Text
          style={{
            fontFamily: fonts.URBANIST_MEDIUM,
            fontSize: 16,
            color: Colors.WHITE,
            marginTop: 10,
          }}>
          Thank you for sharing your valuable review.
        </Text>
      </View>
      <ButtonsCommon
        btnText={'Done'}
        containerStyle={{width: '80%', position: 'absolute', bottom: 30}}
      />
    </View>
  );
};

export default FeedbackSuccess;
