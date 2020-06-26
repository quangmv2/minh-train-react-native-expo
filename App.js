import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import Screen3 from './src/screens/Screen3';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
    
    <MainScreen />
    {/* <Screen3 number={5} /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "row"
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  v1: {
    flex: 5,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  v2: {
    flex: 2,
    backgroundColor: 'blue'
  }
});
