import React from 'react';
import {
    StyleSheet,
    View,
    Animated,
    ViewProps,
    Text,
    RotateXTransform,
    RotateYTransform,
    PerpectiveTransform,
    RotateTransform,
    RotateZTransform,
    ScaleTransform,
    ScaleXTransform,

    ScaleYTransform,
    TranslateXTransform,
    TranslateYTransform,
    SkewXTransform,
    SkewYTransform,
    Easing,
} from 'react-native';
import { withAnchorPoint, Point, Size } from 'react-native-anchor-point';


interface IProps extends ViewProps {
    rotateOnXAxis?: boolean; 
    rotateOnYAxis?: boolean; 
    rotateOnZAxis?: boolean;
    anchorPoint: Point;
}

const CARD_WIDTH = 60;
const CARD_HEIGHT = 60;

export default class TestAnimatedCard extends React.Component<IProps> {
    _rotateAnimatedValue = new Animated.Value(0);
    _animation: any

    componentDidMount() {
       this._animation = Animated
           .loop(
               Animated.timing(this._rotateAnimatedValue, {
                   toValue: 1,
                   duration: 1500,
                   useNativeDriver: true,
                   easing: Easing.cubic
               }),
               { iterations: 1000 },
           )
           .start();
    }

    componentWillUnmount() {
      if(this._animation) {
        this._animation.stop(); 
        this._animation = null
      }
    }

    getTransform = () => {
        // why perspective: 400 useless when put it at last
        let transformValues= [{ perspective: 400 }];
        const rotateValue = this._rotateAnimatedValue.interpolate({
          inputRange: [0, 1], 
          outputRange: ['0deg', '360deg'],
        })

        const {rotateOnXAxis, rotateOnYAxis, rotateOnZAxis} = this.props;
        if (rotateOnXAxis) {
            transformValues.push({ rotateX: rotateValue });
        }

        if (rotateOnYAxis) {
            transformValues.push({ rotateY: rotateValue });
        }

        if (rotateOnZAxis) {
            transformValues.push({ rotateZ: rotateValue });
        }

        let transform = {
            transform: transformValues,
        };
        return withAnchorPoint(transform, this.props.anchorPoint, { width: CARD_WIDTH, height: CARD_HEIGHT });
    };

    render() {
        const { anchorPoint } = this.props;
        const top = anchorPoint.y * CARD_HEIGHT;
        const left = anchorPoint.x * CARD_WIDTH;

        return (
            <View style={styles.background}>
                <Animated.View style={[styles.blockBlue, this.getTransform()]} />
                <View style={[styles.anchorPoint, { left, top }]} />
                <Text style={[styles.text]}>
                    x: {anchorPoint.x}, y: {anchorPoint.y}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        margin: 10,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: '#a6abaa',
    },
    anchorPoint: {
        width: 8,
        height: 8,
        backgroundColor: '#cc3b92',
        position: 'absolute',
    },
    blockBlue: {
        flex: 1,
        backgroundColor: '#03fcd3',
    },
    text: {
        position: 'absolute',
        top: CARD_HEIGHT/2,
        color: '#bd488b',
        fontSize: 11
    },
});
