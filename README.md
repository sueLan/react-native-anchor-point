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
    return withAnchorPoint(transform, { x: 0.5, y: 0 }, { width: CARD_WIDTH, height: CARD_HEIGHT });
};
    
<Animated.View style={[styles.blockBlue, this.getTransform()]} />
```