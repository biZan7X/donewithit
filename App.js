import React, {useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen from './components/Screen';
import ListingEditScreen from './screens/ListingEditScreen';

import navigationTheme from './navigations/navigationTheme';
import AuthNavigator from './navigations/AuthNavigator';

// const Stack = createNativeStackNavigator();

// const Tweets = () => {
//   return (
//     <View>
//       <Text>Tweets</Text>
//     </View>
//   );
// };

// const TweetDetails = () => {
//   return (
//     <View>
//       <Text>Details</Text>
//     </View>
//   );
// };

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Tweets" component={Tweets} />
//       <Stack.Screen name="Details" component={TweetDetails} />
//     </Stack.Navigator>
//   );
// };

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
