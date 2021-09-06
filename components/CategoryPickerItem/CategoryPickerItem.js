import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import AppText from '../AppText';
import Icon from '../Icon';
import styles from './styles';

const CategoryPickerItem = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
