import {GradientBorderView} from '@good-react-native/gradient-border';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Carousel from './carousel';
import {width, widthToDp} from '../../../../utils/Dimensions';
const SwipBar = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Customization</Text>
      <GradientBorderView
        gradientProps={{colors: ['#00a7f7', '#00fc92']}}
        style={{
          borderRadius: 16,
          borderWidth: 1,
          width: '100%',
          height: 42,
          display: 'flex',
          alignItems: 'center',
          padding: 6,
          marginTop: 18,
        }}>
        <Text style={styles.buttonText}>Spicy Level</Text>
      </GradientBorderView>
      <Carousel marginTop={21} />
      <GradientBorderView
        gradientProps={{colors: ['#00a7f7', '#00fc92']}}
        style={{
          borderRadius: 16,
          borderWidth: 1,
          width: '100%',
          height: 42,
          display: 'flex',
          alignItems: 'center',
          padding: 6,
          marginTop: 26,
        }}>
        <Text style={styles.buttonText}>Portion Size</Text>
      </GradientBorderView>
      <Carousel marginTop={21} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    borderRadius: 36,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: widthToDp(90),
    height: 277,
    padding: 15,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontFamily: 'DIN Next LT Arabic',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.072,
  },
  levelButton: {
    position: 'relative',
    width: '100%',
    height: 42,
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spicy: {
    marginTop: 18,
  },
  portion: {
    marginTop: 26,
  },
  buttonText: {
    color: '#00fc92',
    fontFamily: 'DIN Next LT Arabic',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    letterSpacing: -0.32,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default SwipBar;
