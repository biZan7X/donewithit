import React, {useState} from 'react';
import {View, StyleSheet, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Screen from './components/Screen';
import ListingEditScreen from './screens/ListingEditScreen';

const App = () => {
  return <ListingEditScreen />;
};

export default App;
