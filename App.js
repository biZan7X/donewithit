import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  const [selectedItem, onSelectItem] = useState();

  return <LoginScreen />;
};

export default App;
