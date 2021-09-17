import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import * as yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';
import ErrorMessage from '../components/ErrorMessage';

import authApi from '../api/auth';

const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async ({email, password}) => {
    const response = await authApi.login(email, password);

    if (!response.ok) return setLoginError(true);

    setLoginError(false);
    console.log(response.data);
  };

  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginError}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icons="paper-plane"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icons="keyboard"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Login" />
      </AppForm>
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
