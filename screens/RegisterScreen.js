import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';
import ErrorMessage from '../components/ErrorMessage';

import authApi from '../api/auth';
import {useAuth} from '../auth/useAuth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function RegisterScreen() {
  const [signupError, setSignupError] = useState();
  const {logIn} = useAuth();

  const handleSubmit = async ({name, email, password}) => {
    const response = await authApi.signup(name, email, password);
    if (!response.ok) {
      if (response.data) setSignupError(response.data.error);
      else {
        setSignupError('An unexpected error occurred.');
        console.log(response);
      }
      return;
    }

    setSignupError(null);

    const {data} = await authApi.login(email, password);
    logIn(data);
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {signupError && (
          <ErrorMessage
            error="A user already exists with the given email."
            visible={true}
          />
        )}
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
