import React, {useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen from './components/Screen';
import ListingEditScreen from './screens/ListingEditScreen';

import navigationTheme from './navigations/navigationTheme';
import AuthNavigator from './navigations/AuthNavigator';
import AppNavigator from './navigations/AppNavigator';

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
