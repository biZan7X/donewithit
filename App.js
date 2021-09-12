import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

import navigationTheme from './navigations/navigationTheme';
import AppNavigator from './navigations/AppNavigator';

const App = () => {
  const func = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({id: 4}));
      const value = await AsyncStorage.getItem('person');
      console.log(JSON.parse(value));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
