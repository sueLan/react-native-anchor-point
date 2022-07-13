import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import TestCardReanimated from './TestCardReanimated';

const { width } = Dimensions.get('window');

export default function ReanimatedDemo() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TestCardReanimated
            anchorPoint={{ x: 0, y: 0.5 }}
            rotateDegree={45}
            rotateAxis='y'
          />
          <TestCardReanimated
            anchorPoint={{ x: 1, y: 0.5 }}
            rotateDegree={-45}
            rotateAxis='y'
          />
          <TestCardReanimated
            anchorPoint={{ x: 0.5, y: 1 }}
            rotateDegree={45}
            rotateAxis='x'
          />
          <TestCardReanimated
            anchorPoint={{ x: 0.2, y: 0.7 }}
            rotateDegree={45}
            rotateAxis='y'
          />
          <TestCardReanimated
            anchorPoint={{ x: 0.5, y: 0 }}
            rotateDegree={45}
            rotateAxis='y'
          />
          <TestCardReanimated
            anchorPoint={{ x: 0.5, y: 0 }}
            rotateDegree={-45}
            rotateAxis='x'
          />
          <TestCardReanimated
            anchorPoint={{ x: 0.8, y: 0.2 }}
            rotateDegree={45}
            rotateAxis='z'
          />
          <TestCardReanimated
            anchorPoint={{ x: 1, y: 1 }}
            rotateDegree={45}
            rotateAxis='z'
          />
          <TestCardReanimated
            anchorPoint={{ x: 0.5, y: 0 }}
            rotateDegree={45}
            rotateAxis='z'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
  },
});
