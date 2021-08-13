import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';

const validationSchema = yup.object({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={value => console.log(value)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, touched, setFieldTouched}) => (
          <>
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
