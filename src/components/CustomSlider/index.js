import React, {useState} from 'react';
import {View, StyleSheet, PanResponder, Animated} from 'react-native';

const RangeSlider = ({
  minValue,
  maxValue,
  steps,
  activeBackgroundComponent,
  inactiveBackgroundComponent,
  thumbComponent,
  onValueChange,
}) => {
  const [value, setValue] = useState(minValue);
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
    onPanResponderRelease: (evt, gestureState) => {
      const newValue =
        Math.round((gestureState.moveX / sliderWidth) * (maxValue - minValue)) +
        minValue;
      setValue(newValue);
      onValueChange && onValueChange(newValue);
    },
  });

  const sliderWidth = 300;
  const thumbWidth = 30;
  const sliderHeight = 10;
  const thumbHeight = 30;

  const activeWidth =
    ((value - minValue) / (maxValue - minValue)) * sliderWidth;
  const inactiveWidth = sliderWidth - activeWidth;

  return (
    <View style={styles.container}>
      <View style={[styles.slider, {width: sliderWidth, height: sliderHeight}]}>
        <View
          style={[styles.active, {width: activeWidth, height: sliderHeight}]}>
          {activeBackgroundComponent}
        </View>
        <View
          style={[
            styles.inactive,
            {width: inactiveWidth, height: sliderHeight},
          ]}>
          {inactiveBackgroundComponent}
        </View>
        <Animated.View
          style={[
            styles.thumb,
            {transform: [{translateX: pan.x}]},
            {width: thumbWidth, height: thumbHeight},
          ]}
          {...panResponder.panHandlers}>
          {thumbComponent}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  active: {
    backgroundColor: 'green',
    position: 'absolute',
    zIndex: 1,
  },
  inactive: {
    backgroundColor: 'gray',
    position: 'absolute',
    zIndex: 0,
  },
  thumb: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'green',
    zIndex: 2,
  },
});

export default RangeSlider;
