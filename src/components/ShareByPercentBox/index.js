import {Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient'; 
import {Slider} from '@rneui/themed';
import {widthToDp} from '../../utils/Dimensions';
import {roundToTwoDecimalPlaces} from '../../utils/helper';

const ShareByPercentBox = ({userobj, totalBill, percent, onUpdate}) => {
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [calculatedPercent, setCalculatedPercent] = useState(0);

  const handlePercentChange = newPercent => {
    setCalculatedPercent(newPercent);
    setCalculatedAmount(
      roundToTwoDecimalPlaces((newPercent * totalBill) / 100),
    );
    onUpdate(newPercent, (newPercent * totalBill) / 100);
  };

  return (
    <View style={styles.paymentUserBox} class="payment-user-box">
      <View
        class="payment-user-box-name-n-price-container"
        style={styles.paymentUserBoxNamenPriceContainer}>
        <View
          class="payment-user-box-username"
          style={styles.paymentUserBoxUserName}>
          <Image source={userobj.image} />
          <Text style={styles.userName}>{userobj.name}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.percentItemPrice}>
            ${calculatedAmount} ({calculatedPercent}%)
          </Text>
        </View>
      </View>
      <View class="slider-container">
        <View
          class="slider-bar-container"
          style={{position: 'relative', marginBottom: 30}}>
          <View
            class="slider-container-with-labels"
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: widthToDp(85),
            }}>
            <Text
              class="slider-counter-labels"
              style={styles.sliderCounterLabels}>
              0%
            </Text>
            <View class="slider-wrapper" style={{flexDirection: 'row'}}>
              <Slider
                style={{
                  width: widthToDp(70),
                  height: 40,
                  position: 'relative',
                  // left: -10,
                  // backgroundColor: '#f0f',
                }}
                minimumValue={0}
                maximumValue={100}
                step={1}
                animateTransitions
                minimumTrackTintColor="transparent"
                maximumTrackTintColor="transparent"
                thumbTintColor="#fff"
                thumbStyle={{height: 15, width: 15}}
                allowTouchTrack
                onValueChange={val => {
                  handlePercentChange(val);
                  return true;
                }}
              />

              <View class="active-order-bar-bg" style={styles.sliderGradBar}>
                <LinearGradient
                  class="intro-active-orders"
                  colors={[
                    '#00F594ff',
                    '#00F594ff',
                    '#00F594ff',
                    '#02ABEEff',
                    '#00F594ff',
                  ]}
                  useAngle={true}
                  angle={45}
                  style={{
                    borderRadius: 10,
                    flexWrap: 'nowrap',
                    height: 8,
                    width: percent + 1 + '%',
                  }}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 0.5}}
                />
              </View>
            </View>
            <Text
              class="slider-counter-labels"
              style={styles.sliderCounterLabels}>
              100%
            </Text>
          </View>
        </View>
        <View
          style={{
            width: widthToDp(85),
            justifyContent: 'start',
            alignContent: 'center',
          }}></View>
      </View>
    </View>
  );
};

export default ShareByPercentBox;
