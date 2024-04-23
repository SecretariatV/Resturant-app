import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Rating} from 'react-native-ratings';
import FadedSeparator from '../FadedSeparator';
import {widthToDp} from '../../utils/Dimensions';
import { Slider } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';

const StepSlider = ({min, max, initVal = 0, getSliderVal}) => {
  const [thisVal, setThisVal] = useState(initVal);

  getSliderVal = () => {
    return thisVal;
  };
  return (
    <View class="slider-container">
      <View
        class="slider-bar-container"
        style={{
          position: 'relative',
          marginBottom: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Slider
          style={{
            width: widthToDp(85),
            height: 40,
            position: 'relative',
            // left: -10,
            animationType: "spring",
          }}
          minimumValue={min}
          maximumValue={max}
          // value={progress}
          thumbStyle={{width: 20, height: 20}}
          step={1}
          minimumTrackTintColor="transparent"
          maximumTrackTintColor="transparent"
          thumbTintColor="#fff"
          onValueChange={val => {
            console.log(val, thisVal);
            setThisVal(val);
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
              width: thisVal + 5 + '%',
              // maxWidth: widthToDp(75),
            }}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}} />
        </View>
        {/* <HundredPercentBar
          width={widthToDp(85)}
          style={{position: 'absolute', left: 0, top: 35}}
        /> */}
        <View
          class="step-scale"
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            width: widthToDp(86),
          }}>
          <View
            class="step-zero"
            style={{
              alignItems: 'center',
              backgroundColor: '#f0a305',
              textAlign: 'center',
            }}>
            <Text style={{}}>0%</Text>
            <Text style={{}}>|</Text>
          </View>
          <View
            class="step-zero"
            style={{
              alignItems: 'center',
              backgroundColor: '#f0a305',
              textAlign: 'center',
            }}>
            <Text style={{}}>25%</Text>
            <Text style={{}}>|</Text>
          </View>
          <View
            class="step-zero"
            style={{
              alignItems: 'center',
              backgroundColor: '#f0a305',
              textAlign: 'center',
            }}>
            <Text style={{}}>50%</Text>
            <Text style={{}}>|</Text>
          </View>
          <View
            class="step-zero"
            style={{
              alignItems: 'center',
              backgroundColor: '#f0a305',
              textAlign: 'center',
            }}>
            <Text style={{}}>75%</Text>
            <Text style={{}}>|</Text>
          </View>
          <View
            class="step-zero"
            style={{
              alignItems: 'center',
              backgroundColor: '#f0a305',
              textAlign: 'center',
            }}>
            <Text style={{}}>100%</Text>
            <Text style={{}}>|</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: widthToDp(85),
          justifyContent: 'start',
          alignContent: 'center',
        }}></View>
    </View>
  );
};

export default StepSlider;
