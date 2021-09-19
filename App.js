import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import jwt_decode from 'jwt-decode';

import navigationTheme from './navigations/navigationTheme';
import AppNavigator from './navigations/AppNavigator';
import AuthNavigator from './navigations/AuthNavigator';

import OfflineNotice from './components/OfflineNotice';

import AuthContext from './auth/context';
import authStorage from './api/storage';

const App = () => {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return null;
    setUser(jwt_decode(token));
  };

  useEffect(() => restoreToken(), []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
