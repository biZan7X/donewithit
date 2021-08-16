import React from 'react';
import {TouchableOpacity} from 'react-native';

import AppText from '../AppText';
import styles from './styles';

const PickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText customStyle={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
