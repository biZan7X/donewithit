import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import navigationTheme from './navigations/navigationTheme';
import AppNavigator from './navigations/AppNavigator';
import AuthNavigator from './navigations/AuthNavigator';
import OfflineNotice from './components/OfflineNotice';

const App = () => {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
