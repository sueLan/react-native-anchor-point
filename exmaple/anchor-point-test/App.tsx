import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AnchorPointDemo from './AnchorPointDemo';
import ReanimatedDemo from './ReanimatedDemo';

export default function App() {
  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      {selected === 0 ? <AnchorPointDemo/> : <ReanimatedDemo/>}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setSelected(0)} style={styles.tabBarItem}>
          <Text>Animated Ex </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelected(1)} style={styles.tabBarItem}>
          <Text>Reanimated 2 Ex </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    height: 50,
    width: '90%',
    position: 'absolute',
    backgroundColor: '#ddd',
    bottom: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
