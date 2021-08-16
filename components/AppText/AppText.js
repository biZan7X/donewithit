import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

const AppText = ({children, customStyle, ...otherProps}) => {
  return (
    <Text style={[styles.text, {...customStyle}]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
