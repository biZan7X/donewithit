import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';

import styles from './styles';
import defaultStyles from '../../config/styles';
import colors from '../../config/color';

const AppTextInput = ({icons, ...otherProps}) => {
  return (
    <View style={styles.container}>
      {icons && <FontAwesome style={styles.icon} icon={SolidIcons[icons]} />}
      <TextInput
        placeholderTextColor={colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;
