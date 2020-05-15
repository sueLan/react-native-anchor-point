# react-native-anchor-point
I provide a util function to inject anchor point, or called pivot point into your transform object, to achieve 3D transform animation in React-Native. This is similar to web transform-origin in React-Native. 

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

getTransform = () => {
    let transform = {
        transform: [{ perspective: 400 }, { rotateX: rotateValue }],
    };
    return withAnchorPoint(transform, { x: 0.5, y: 0 }, { width: CARD_WIDTH, height: CARD_HEIGHT });
};
    
<Animated.View style={[styles.blockBlue, this.getTransform()]} />
```