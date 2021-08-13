import React from 'react';
import {View} from 'react-native';

import AppText from '../AppText';
import styles from './styles';

const ErrorMessage = ({error}) => {
  if (!error) return null;

  return <AppText customStyle={styles.error}>{error}</AppText>;
};

export default ErrorMessage;
