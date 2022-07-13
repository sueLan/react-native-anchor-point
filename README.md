# react-native-anchor-point


Provide a simple, tricky but powerful function, `withAnchorPoint` , like Anchor Point in iOS, Pivot Point in Android, `transform-origin` in css to achieve better 3D transform animation in React-Native.

> Make the 3D transform easier in React Native

![](./res/rotateZ.gif)
![](./res/rotateXY.gif)
![](./res/rotate.gif)

## Getting Started

install the `react-native-anchor-point`

```
yarn add react-native-anchor-point
```
or
```
npm install react-native-anchor-point
```

## Example

```javascript
import { withAnchorPoint } from 'react-native-anchor-point';

getTransform = () => {
  let transform = {
    transform: [{ perspective: 400 }, { rotateX: rotateValue }],
  };
  return withAnchorPoint(transform, { x: 0.5, y: 1.5 }, { width: CARD_WIDTH, height: CARD_HEIGHT });
};

<Animated.View style={[styles.blockBlue, this.getTransform()]} />
```

## Example using reanimated v2 or higher

More examples provided in `/example` folder.

```javascript
import { getAnchorPoint } from 'react-native-anchor-point';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const rotatetY = useSharedValue(0);

const anchorPoint = { x: 0.5, y: 1.5 };

const { translateX, translateY } = getAnchorPoint(anchorPoint, {
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
});

const animatedStyle = useAnimatedStyle(() => ({
  transform: [
    // shift before rotation
    { translateX: translateX },
    { translateY: translateY },
    { perspective: 400 },
    { rotateY: `${rotatetY.value}deg` },
    // shift after rotation
    { translateX: -translateX },
    { translateY: -translateY },
  ],
}));

<Animated.View style={[styles.blockBlue, animatedStyle]} />;
```