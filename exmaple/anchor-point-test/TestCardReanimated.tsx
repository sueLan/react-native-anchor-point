import React, { useEffect } from "react";
import { StyleSheet, View, ViewProps, Text } from "react-native";
import { Point, getAnchorPoint } from "react-native-anchor-point";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface IProps extends ViewProps {
  rotateDegree: number;
  rotateAxis: "x" | "y" | "z";
  anchorPoint: Point;
}

const CARD_WIDTH = 200;
const CARD_HEIGHT = 200;

export default function TestCardReanimated({
  rotateAxis,
  rotateDegree,
  anchorPoint,
}: IProps) {
  const rotatetY = useSharedValue(0);
  const rotatetZ = useSharedValue(0);
  const rotatetX = useSharedValue(0);

  useEffect(() => {
    if (rotateAxis === "y") {
      rotatetY.value = withRepeat(withTiming(rotateDegree, { duration: 400 }), -1, true);
    } else if (rotateAxis === "x") {
      rotatetX.value = withRepeat(withTiming(rotateDegree, { duration: 400 }), -1, true);
    } else {
      rotatetZ.value = withRepeat(withTiming(rotateDegree, { duration: 400 }), -1, true);
    }
  }, [rotateAxis, rotateDegree]);

  const { translateX, translateY } = getAnchorPoint(anchorPoint, {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  });

  const top = anchorPoint.y * CARD_HEIGHT;
  const left = anchorPoint.x * CARD_WIDTH;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX },
      { translateY: translateY },
      { perspective: 400 },
      { rotateY: `${rotatetY.value}deg` },
      { rotateX: `${rotatetX.value}deg` },
      { rotateZ: `${rotatetZ.value}deg` },
      { translateX: -translateX },
      { translateY: -translateY },
    ],
  }));

  return (
    <View style={styles.background}>
      <Animated.View style={[styles.blockBlue, animatedStyle]} />
      <View style={[styles.anchorPoint, { left, top }]} />
      <Text style={[styles.text]}>
        x: {anchorPoint.x}, y: {anchorPoint.y}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    margin: 50,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#a6abaa",
  },
  anchorPoint: {
    width: 8,
    height: 8,
    backgroundColor: "#cc3b92",
    position: "absolute",
  },
  blockBlue: {
    flex: 1,
    backgroundColor: "#03fcd3",
  },
  text: {
    position: "absolute",
    left: 80,
    top: 80,
    color: "#bd488b",
    zIndex: 999,
  },
});
