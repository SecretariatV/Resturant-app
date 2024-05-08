import {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Image,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const STATE_LISTS = ['Nearby', 'All', 'Trending', 'Test'];

export default function Curvature({onSectionChange}) {
  console.log(onSectionChange, 'onSectionChange');
  const [active, setActive] = useState(1);
  const [mouseActive, setMouseActive] = useState(false);
  const [moveHandled, setMoveHandled] = useState(false);
  const [position, setPosition] = useState(0);

  const rotate = useRef(new Animated.Value((1 - active) * 13)).current;

  const handlePanResponderMove = (e, gestureState) => {
    if (!mouseActive || moveHandled) return;
    setMoveHandled(true);
    const {moveX} = gestureState;
    if (moveX < position && active > 0) {
      console.log(active, 'active text');
      setActive(prevActive => prevActive - 1);
    } else if (moveX > position && active < STATE_LISTS.length - 1) {
      console.log(active, 'prev');
      setActive(prevActive => prevActive + 1);
    }
  };

  const handlePanResponderRelease = () => {
    setMouseActive(false);
    setMoveHandled(false);
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState) => {
          setPosition(gestureState.moveX);
          setMouseActive(true);
        },
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderRelease,
      }),
    [mouseActive, moveHandled],
  );

  useEffect(() => {
    onSectionChange(STATE_LISTS[active]); // Notify parent of active section change

    Animated.timing(rotate, {
      toValue: (1 - active) * 13,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [active, onSectionChange]);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      {/* <View style={{position: 'relative', width: '100%'}}> */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          // bottom: 0,
          width: '100%',
          height: 66,
          display: 'flex',
          flexDirection: 'row',
          // backgroundColor: 'red',
          zIndex: 10,
          transform: [
            {translateY: -640},
            {
              rotate: rotate.interpolate({
                inputRange: [-360, 360],
                outputRange: ['-360deg', '360deg'],
              }),
            },
          ],
        }}
        {...panResponder.panHandlers}>
        {STATE_LISTS.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.transformOriginView,
                {
                  transform: [
                    {rotate: `${(index - 1) * 13}deg`},
                    {translateY: 660},
                  ],
                },
              ]}>
              <Text
                style={{
                  color: `${index === active ? '#000' : '#a0a0a0'}`,
                  padding: 4,
                }}
                onPress={() => {
                  if (mouseActive) return;
                  if (
                    (active < index && index < STATE_LISTS.length) ||
                    (index < active && index >= 0)
                  ) {
                    setActive(index);
                  }
                }}>
                {item}
              </Text>
            </View>
          );
        })}
      </Animated.View>
      <Image
        source={require('./img/bottom.png')}
        style={{
          width: '100%',
          objectFit: 'cover',
          aspectRatio: '390/152',
          height: 'auto',
        }}
      />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  transformOriginView: {
    width: '33%',
    position: 'absolute',
    top: '50%',
    left: '33.5%',
    transformOrigin: 'top',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
