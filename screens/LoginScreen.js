import React from 'react';
import {StyleSheet, Image} from 'react-native';
import * as yup from 'yup';

import Screen from '../components/Screen';
// import AppTextInput from '../components/AppTextInput';
// import AppButton from '../components/AppButton';
// import AppText from '../components/AppText';
// import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={value => console.log(value)}
        validationSchema={validationSchema}>
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
