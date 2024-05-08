import { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from "react-native";

const STATE_LISTS = ["Low", "Medium", "High", "Very High"];

export default function Carousel({ marginTop }) {
  const [active, setActive] = useState(1);
  const [mouseActive, setMouseActive] = useState(false);
  const [moveHandled, setMoveHandled] = useState(false);
  const [position, setPosition] = useState(0);

  const translateX = useRef(new Animated.Value((1 - active) * 120)).current;

  const handlePanResponderMove = (e, gestureState) => {
    if (!mouseActive || moveHandled) return;
    setMoveHandled(true);
    const { moveX } = gestureState;
    if (moveX > position && active > 0) {
      setActive((prevActive) => prevActive - 1);
    } else if (moveX < position && active < STATE_LISTS.length - 1) {
      setActive((prevActive) => prevActive + 1);
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
    [mouseActive, moveHandled]
  );

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: (1 - active) * 120,
      useNativeDriver: true,
    }).start();
  }, [active]);

  return (
    <View
      style={{
        marginTop: marginTop,
        width: "100%",
        height: 24,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          transform: [{ translateX }],
        }}
        {...panResponder.panHandlers}
      >
        {STATE_LISTS.map((list, index) => (
          <View
            key={index}
            style={{
              width: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: `${index === active ? "#00fc92" : "#828282"}` }}
              onPress={() => {
                if (mouseActive) return;
                if (
                  (active < index && index < STATE_LISTS.length) ||
                  (index < active && index >= 0)
                ) {
                  setActive(index);
                }
              }}
            >
              {list}
            </Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    position: "absolute",
    height: "auto",
    display: "flex",
    flexDirection: "row",
  },
});
