import React from 'react';
import {View, StyleSheet} from 'react-native';

import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';

import Screen from './components/Screen';
import Icon from "./components/Icon"
import AppButton from './components/AppButton';
import Card from './components/Card/Card';
import ListItem from './components/ListItem';


const App = () => {
  return (
    <Screen>
      <ListItem title="Hello"  ImageComponent={() => <Icon name="timesCircle" backgroundColor="red" />} />
    </Screen>
  );
}


export default App;