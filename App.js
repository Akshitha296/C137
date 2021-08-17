import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'; 
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Details from './screens/Details';

export default function App() {
  return (
    <AppContainer/>
  );
}
const appStackNavigatior = createStackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: Details}
}, {
  initialRouteName: "Home"
})

const AppContainer = createAppContainer(appStackNavigatior)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
