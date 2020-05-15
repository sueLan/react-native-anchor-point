import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Animated } from 'react-native';
import TestCard from './TestCard';
import TestAnimatedCard from './TestAnimatedCard';

export default class AnchorPointDemo extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <TestCard anchorPoint={{ x: 0, y: 0.5 }} rotateY={'45deg'} />
                <TestCard anchorPoint={{ x: 1, y: 0.5 }} rotateY={'-45deg'} />
                <TestCard anchorPoint={{ x: 0.5, y: 1 }} rotateX={'-45deg'} />
                <TestCard anchorPoint={{ x: 0.5, y: 1 }} rotateX={'45deg'} />
                <TestCard anchorPoint={{ x: 0.2, y: 0.7 }} rotateY={'45deg'} />
                <TestCard anchorPoint={{ x: 0.5, y: 0 }} rotateY={'45deg'} />
                <TestCard anchorPoint={{ x: 0.5, y: 0 }} rotateX={'-45deg'} />
                <TestCard anchorPoint={{ x: 0.8, y: 0.2 }} rotateZ={'45deg'} />
                <TestCard anchorPoint={{ x: 1, y: 1 }} rotateZ={'45deg'} />
                <TestCard anchorPoint={{ x: 0.5, y: 0 }} rotateZ={'45deg'} />

                <View style={[styles.row, styles.marginTop]}>
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 1 }} rotateOnXAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0.4, y: 0.4 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 0.5 }} rotateOnYAxis={true} />
                </View>
                <View style={styles.row}>
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 0 }} rotateOnZAxis={true} rotateOnXAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 0 }} rotateOnZAxis={true} rotateOnYAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 0 }} rotateOnXAxis={true} rotateOnYAxis={true} />
                </View>

                <View style={[styles.row, styles.marginTop]}>
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 0 }} rotateOnXAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0.5, y: 0.5 }} rotateOnXAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 1 }} rotateOnXAxis={true} />
                </View>
                <View style={styles.row}>
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 0 }} rotateOnYAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0.5, y: 0.5 }} rotateOnYAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 1 }} rotateOnYAxis={true} />
                </View>

                <View style={[styles.row, styles.marginTop]}>
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 0 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0.5, y: 0 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 0 }} rotateOnZAxis={true} />
                </View>
                <View style={styles.row}>
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 0.5 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0.5, y: 0.5 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 0.5 }} rotateOnZAxis={true} />
                </View>
                <View style={[styles.row, {marginBottom: 100}]}>
                    <TestAnimatedCard anchorPoint={{ x: 0, y: 1 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 0.5, y: 1 }} rotateOnZAxis={true} />
                    <TestAnimatedCard anchorPoint={{ x: 1, y: 1 }} rotateOnZAxis={true} />
                </View>
                 
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 64
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: 60,
        justifyContent: 'space-between'
    },
    marginTop: {
        marginTop: 300
    }
});
