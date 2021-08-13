import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icons="paper-plane"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icons="keyboard"
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
});

export default LoginScreen;
