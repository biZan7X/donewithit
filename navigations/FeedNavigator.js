import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import routes from './routes';

import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
      <Stack.Screen
        name={routes.LISTINGDETAILS}
        component={ListingDetailsScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
