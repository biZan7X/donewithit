import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={value => console.log(value)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icons="paper-plane"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icons="keyboard"
              onChangeText={handleChange('password')}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
