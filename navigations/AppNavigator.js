import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListingScreen from '../screens/ListingScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';

import routes from './routes';

import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

import NewListingButton from './NewListingButton';

import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={routes.FEEDNAV}
        component={FeedNavigator}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              icon={SolidIcons['list-alt']}
              style={{color: color, fontSize: size}}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.LISTINGEDIT}
        component={ListingEditScreen}
        options={({navigation}) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate('ListingEdit')}
            />
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              icon={SolidIcons['plus-square']}
              style={{color: color, fontSize: size}}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNTNAV}
        component={AccountNavigator}
        options={({}) => ({
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              icon={SolidIcons['user-circle']}
              style={{color: color, fontSize: size}}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
